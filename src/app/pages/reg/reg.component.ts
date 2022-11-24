import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';
import { Router } from '@angular/router';

@Component({
	selector: 'app-reg',
	templateUrl: './reg.component.html',
	styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

	regForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
		rePassword: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		telephone: new FormControl('', [Validators.required])
	});

	rank = "";

	hide1 = true;
	hide2 = true;

	constructor(private router: Router, private http: HttpClient) { }

	ngOnInit(): void {
		this.rank = "false";
	}

	getErrorMessage(type: string) {
		if (this.regForm.get(type)?.hasError("required"))
			return "You must enter a value.";

		if (type === "email")
			return this.regForm.get("email")?.hasError("email") ? "Not a valid email." : "";

		return "";
	}

	onSubmit() {
		if (!this.regForm.valid || this.rank === "")
			return;

		this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
			next: data => {
				for (let i = 0; i < data.length; i++)
				{
					if (this.regForm.value.email === data[i].email) {
						alert("This email is already in use.");
						return;
					}
				};
			},
			error: error => console.error('There was an error!', error.message)
		})

		let user = {
			name: this.regForm.value.name,
			password: this.regForm.value.password,
			email: this.regForm.value.email,
			telephone: this.regForm.value.telephone,
			rank: (this.rank === "true" ? true : false)
		};

		this.http.post<User>("http://localhost:8080/users", user).subscribe({
			next: _ => {
				alert("Registration successful!");
				this.router.navigate(['/login']);
			},
			error: error => console.error('There was an error!', error.message)
		})
	}
}
