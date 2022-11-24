import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../models/User';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	@Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

	loggedIn?: User | null;

	constructor(private router: Router) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd)
				this.setLoggedInUser();
		});
	}

	ngOnInit(): void { }

	setLoggedInUser() {
		let user = localStorage.getItem('loggedInUser');
		this.loggedIn = user === null ? null : JSON.parse(user);
	}

	close() {
		this.onCloseSidenav.emit(true);
	}

	onLogout() {
		localStorage.clear();
	}
}
