import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
		if (AppComponent.loggedInUser != null) {
			this.regForm.setValue({
				name: AppComponent.loggedInUser?.name,
				password: AppComponent.loggedInUser?.password,
				rePassword: AppComponent.loggedInUser?.password,
				email: AppComponent.loggedInUser?.email,
				telephone: AppComponent.loggedInUser?.telephone
			});
			this.rank = String(AppComponent.loggedInUser?.rank);
		}
	}

	getErrorMessage(type: string) {
		if (this.regForm.get(type)?.hasError("required"))
			return "You must enter a value.";

		if (type === "email")
			return this.regForm.get("email")?.hasError("email") ? "Not a valid email." : "";

		return "";
	}

	onSubmit() {
		if (!this.regForm.valid || this.rank === "") {
			alert("Some of the credentials are wrong.");
			return;
		}

		this.http.get<Array<User>>("http://localhost:8080/users").subscribe({
			next: data => {
				for (let i = 0; i < data.length; i++)
				{
					if (data[i].id === AppComponent.loggedInUser?.id)
						continue;

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

		this.http.put<User>("http://localhost:8080/users/" + AppComponent.loggedInUser?.id, user).subscribe({
			next: data => console.log(data.name),
			error: error => console.error('There was an error!', error.message)
		})
	}

	onDelete() {
		if(confirm("Are you sure you want to delete your profile?")) {
				this.http.delete<User>("http://localhost:8080/users/" + AppComponent.loggedInUser?.id).subscribe({
				next: _ => {
					alert("The user has been deleted successfully.");
					this.router.navigate(['/login']);
					localStorage.clear();
				},
				error: error => console.error('There was an error!', error.message)
			})
		}
	}
}
