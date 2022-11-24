import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Service } from 'src/app/shared/models/Service';

@Component({
	selector: 'app-new-service',
	templateUrl: './new-service.component.html',
	styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {

	@Output() new_service = new EventEmitter<boolean>();

	regForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required]),
		telephone: new FormControl('', [Validators.required]),
		type: new FormControl('', [Validators.required]),
		price: new FormControl('', [Validators.required]),
		time: new FormControl('', [Validators.required])
	});

	constructor(private router: Router, private http: HttpClient) { }

	ngOnInit(): void {
		if (AppComponent.loggedInUser != null) {
			this.regForm.setValue({
				name: AppComponent.loggedInUser?.name,
				email: AppComponent.loggedInUser?.email,
				telephone: AppComponent.loggedInUser?.telephone,
				type: null,
				price: null,
				time: null
			});
		}
	}

	onSubmit() {
		if (!this.regForm.valid)
			return;

		let service = {
			userid: AppComponent.loggedInUser?.id,
			name: this.regForm.value.name,
			email: this.regForm.value.email,
			telephone: this.regForm.value.telephone,
			type: this.regForm.value.type,
			status: true,
			price: this.regForm.value.price,
			time: this.regForm.value.time
		};

		this.http.post<Service>("http://localhost:8080/services", service).subscribe({
			next: _ => {
				alert("The service has been created successfully!");
				this.new_service.emit(false);
			},
			error: error => console.error('There was an error!', error.message)
		})
	}

	getErrorMessage(type: string) {
		if (this.regForm.get(type)?.hasError("required"))
			return "You must enter a value.";

		if (type === "email")
			return this.regForm.get("email")?.hasError("email") ? "Not a valid email." : "";

		return "";
	}
}
