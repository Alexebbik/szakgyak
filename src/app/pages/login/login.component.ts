import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;

	email = new FormControl('');
	password = new FormControl('');

	loading: boolean = false;

	constructor(private router: Router, private http: HttpClient) { }

	ngOnInit(): void {
		
	}

	async login() {
		this.loading = true;
		console.log("yes");

		this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
			next: data => {
				for (let i = 0; i < data.length; i++)
					if (data[i].email === this.email.value)
						if (data[i].password === this.password.value) {
							localStorage.setItem('loggedInUser', JSON.stringify(data[i]));
							this.router.navigate(['/main']);
							break;
						}

				this.loading = false;
			},
			error: error =>	{
				console.error('There was an error!', error.message);
				this.loading = false;
			}
		})
	}

}
