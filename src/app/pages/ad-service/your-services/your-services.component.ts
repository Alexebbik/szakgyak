import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Service } from 'src/app/shared/models/Service';

@Component({
	selector: 'app-your-services',
	templateUrl: './your-services.component.html',
	styleUrls: ['./your-services.component.scss']
})
export class YourServicesComponent implements OnInit {

	@Output() new_service = new EventEmitter<boolean>();
	@Output() service = new EventEmitter<Service>();

	yourServices: any;
	yourServicesArray: Service[] = [];

	column = "Name";
	public static Column = "Name";
	direction = false;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.getServices();
	}

	getServices() {
		this.http.get<Array<Service>>("http://localhost:8080/services/userid=" + AppComponent.loggedInUser?.id).subscribe(
			data => {
				this.yourServicesArray = data;
				this.yourServices = new MatTableDataSource(data);
			}
		);
	}

	sortBy(column: string) {
		if (this.column === column)
			this.direction = !this.direction;
		else {
			this.column = column;
			YourServicesComponent.Column = column;
			this.direction = false;
		}

		if (!this.direction)
			this.yourServicesArray.sort(this.compare);
		else
			this.yourServicesArray.sort(this.compare).reverse();
		this.yourServices = new MatTableDataSource(this.yourServicesArray);
	}

	compare(a: Service, b: Service) {
		switch (YourServicesComponent.Column) {
			case 'Name':
				return (a.name < b.name) ? -1 : (a.name > b.name ? 1 : 0);
			case 'Email':
				return (a.email < b.email) ? -1 : (a.email > b.email ? 1 : 0);
			case 'Telephone':
				return (a.telephone < b.telephone) ? -1 : (a.telephone > b.telephone ? 1 : 0);
			case 'Type':
				return (a.type < b.type) ? -1 : (a.type > b.type ? 1 : 0);
			case 'Status':
				return (a.status < b.status) ? -1 : (a.status > b.status ? 1 : 0);
			case 'Price':
				return (a.price < b.price) ? -1 : (a.price > b.price ? 1 : 0);
			case 'Time':
				return (a.time < b.time) ? -1 : (a.time > b.time ? 1 : 0);
			default:
				return 0;
		}
	}
	
	onEdit(service: Service) {
		this.new_service.emit(true);
		this.service.emit(service);
	}
	
	onDelete(id: number) {
		if(confirm("Are you sure you want to delete this service?")) {
			this.http.delete<Service>("http://localhost:8080/services/" + id).subscribe({
				next: _ => {
					alert("The service has been deleted successfully.");
					this.getServices();
				},
				error: error => console.error('There was an error!', error.message)
			})
		}
	}
}
