import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void { }
	
	rankCheck() {
		if (AppComponent.loggedInUser === null)
			alert("To open this page, you have to log in with an appropriate ranked user!");
		else if (!AppComponent.loggedInUser?.rank)
			alert("To open this page, you have to upgrade your rank!");
		else
			this.router.navigate(['/ad-service']);
	}
}
