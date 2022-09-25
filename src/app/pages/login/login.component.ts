import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;

	email = new FormControl('');
	password = new FormControl('');

	loadingSubscription?: Subscription;
	loadingObservation?: Observable<boolean>;

	loading: boolean = false;

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	async login() {
		this.loading = true;
	}

}
