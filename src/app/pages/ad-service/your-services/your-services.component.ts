import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Service } from 'src/app/shared/models/Service';
import { Servicetype } from 'src/app/shared/models/Servicetype';

@Component({
	selector: 'app-your-services',
	templateUrl: './your-services.component.html',
	styleUrls: ['./your-services.component.scss']
})
export class YourServicesComponent implements OnInit {

	@Output() new_service = new EventEmitter<boolean>();
	@Output() service = new EventEmitter<Service>();
	
	serviceTypes: Servicetype[] = [];

	yourServices: any;
	yourServicesArray: Service[] = [];
	viewerServicesDatabase: Service[] = [];

	column = "";
	public static Column = "";
	direction = false;

	pageIndex = 0;
	length = 0;
	pageSize = 10;
	pageSizeOptions = [10, 25, 50];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Array<Servicetype>>("http://localhost:8080/servicetpyes").subscribe(data => this.serviceTypes = data);

		this.http.get<Array<Service>>("http://localhost:8080/services/userid=" + AppComponent.loggedInUser?.id).subscribe(
			data => {
				this.yourServicesArray = data;

				this.length = data.length;
				this.sortBy("Name");
			}
		);
	}

	getServicetypeById(id: number): string | undefined {
		return this.serviceTypes.find(x => x.id === id)?.type;
	}

	handlePageEvent(e: PageEvent) {
		this.length = e.length;
		this.pageSize = e.pageSize;
		this.pageIndex = e.pageIndex;

		this.viewerServicesDatabase = this.yourServicesArray.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
		this.yourServices = new MatTableDataSource(this.viewerServicesDatabase);
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

		this.viewerServicesDatabase = this.yourServicesArray.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
		this.yourServices = new MatTableDataSource(this.viewerServicesDatabase);
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

					this.http.get<Array<Service>>("http://localhost:8080/services/userid=" + AppComponent.loggedInUser?.id).subscribe(
						data => {
							this.yourServicesArray = data;
							this.yourServices = new MatTableDataSource(data);
						}
					);
				},
				error: error => console.error('There was an error!', error.message)
			})
		}
	}
}
