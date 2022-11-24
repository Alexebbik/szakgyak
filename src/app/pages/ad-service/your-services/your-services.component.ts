import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/Service';

@Component({
	selector: 'app-your-services',
	templateUrl: './your-services.component.html',
	styleUrls: ['./your-services.component.scss']
})
export class YourServicesComponent implements OnInit {

	basicdatabase = [
		{
			name: "asd",
			email: "asd",
			telephone: "asd",
			type: 1,
			status: false,
			price: 69,
			time: "sfeaefa",
		}
	];

	yourServices: Service[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Array<Service>>("http://localhost:8080/services").subscribe({
			next: data => {
				for (let i = 0; i < data.length; i++)
				{
					this.yourServices.push(data[i]);
				};
			},
			error: error => console.error('There was an error!', error.message)
		})

		console.log(this.yourServices);
	}

}
