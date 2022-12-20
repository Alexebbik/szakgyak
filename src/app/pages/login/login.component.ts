import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';
import { Service } from 'src/app/shared/models/Service';

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

		this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
			next: data => {
				for (let i = 0; i < data.length; i++)
					if (data[i].email === this.email.value)
						if (data[i].password === this.password.value) {
							localStorage.setItem('loggedInUser', JSON.stringify(data[i]));
							this.router.navigate(['/main']);

							if (data[i].reservedservices > 0) {
								data[i].reservedservices = 0;

								this.http.put<User>("http://localhost:8080/users/" + data[i].id, data[i]).subscribe({
									next: _ => alert("The statuses of some services you reserved have been changed."),
									error: error => console.error('There was an error!', error.message)
								})
							}

							if (data[i].rank) {
								this.http.get<Array<Service>>("http://localhost:8080/services/userid=" + data[i].id).subscribe(
									services => {
										for (let j = 0; j < services.length; j++) 
											if (services[j].status === 2)
												alert("The status of some of your services has been changed to \"Waiting for Acceptance\"!");
									}
								);
							}
							
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
