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
		/*this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
			next: data => {
				for (let i=0;i<data.length;i++)
				{console.log(data[i].name)};
			},
			error: error => {
				console.error('There was an error!', error.message);
			}
		})


		let user = {
			name: "dzidza",
			password: "123",
			email: "nincs",
			telephone: "666",
			rank: true
		};
		this.http.post<User>("http://localhost:8080/users", user).subscribe({
			error: error => {
				console.error('There was an error!', error.message);
			}
		})

	
		let user = {
			name: "gugya",
			password: "123",
			email: "nincs",
			telephone: "666",
			rank: true
		};
		this.http.put<User>("http://localhost:8080/users/17", user).subscribe({
			next: data => console.log(data.name)
			,
			error: error => {
				console.error('There was an error!', error.message);
			}
		})

		this.http.delete<Array<User>>("http://localhost:8080/users/1").subscribe({
			next: _ => {
				console.log("Delete successful");
			},
			error: error => {
				console.error('There was an error!', error.message);
			}
		})*/
	}

	async login() {
		this.loading = true;

		this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
			next: data => {
				for (let i = 0; i < data.length; i++)
					if (data[i].email === this.email.value)
						if (data[i].password === this.password.value) {
							console.log("Login success as " + data[i].name + "!");
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
