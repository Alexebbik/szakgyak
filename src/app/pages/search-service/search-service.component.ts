import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/shared/models/Service';

@Component({
	selector: 'app-search-service',
	templateUrl: './search-service.component.html',
	styleUrls: ['./search-service.component.scss']
})
export class SearchServiceComponent implements OnInit {

	searchText = '';
	maxPrice = 1000;
	minValue = 0;
	maxValue = this.maxPrice;

	services = new FormControl('');
	timePicker = new FormControl('');

	servicesList = [
		"spraying",
		"mowing"
	];

	date = Date.now();

	servicesDatabase: any;
	servicesDatabaseArray: Service[] = [];

	column = "Name";
	public static Column = "Name";
	direction = false;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Array<Service>>("http://localhost:8080/services").subscribe(
			data => {
				this.servicesDatabaseArray = data;
				this.servicesDatabase = new MatTableDataSource(data);
			}
		);
	}

	sortBy(column: string) {
		if (this.column === column)
			this.direction = !this.direction;
		else {
			this.column = column;
			SearchServiceComponent.Column = column;
			this.direction = false;
		}

		if (!this.direction)
			this.servicesDatabaseArray.sort(this.compare);
		else
			this.servicesDatabaseArray.sort(this.compare).reverse();
		this.servicesDatabase = new MatTableDataSource(this.servicesDatabaseArray);
	}

	compare(a: Service, b: Service) {
		switch (SearchServiceComponent.Column) {
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

	search() {

	}

}
