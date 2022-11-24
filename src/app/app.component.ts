import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { User } from './shared/models/User';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	loggedIn?: User | null;
	public static loggedInUser?: User | null;

	constructor(private router: Router) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd)
				this.setLoggedInUser();
		});
	}

	ngOnInit() {
	}

	setLoggedInUser() {
		let user = localStorage.getItem('loggedInUser');
		this.loggedIn = user === null ? null : JSON.parse(user);
		AppComponent.loggedInUser = this.loggedIn;
		console.log(user);
	}

	onToggleSidenav(sidenav: MatSidenav) {
		sidenav.toggle();
	}

	onClose(event: any, sidenav: MatSidenav) {
		if (event === true)
			sidenav.close();
	}

	onLogout() {
		localStorage.clear();
	}
}
