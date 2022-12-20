import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Service } from 'src/app/shared/models/Service';
import { Servicetype } from 'src/app/shared/models/Servicetype';

@Component({
	selector: 'app-search-service',
	templateUrl: './search-service.component.html',
	styleUrls: ['./search-service.component.scss']
})
export class SearchServiceComponent implements OnInit {

	searchText = '';
	maxPrice = 0;
	minValue = 0;
	maxValue = this.maxPrice;

	services = new FormControl('');

	serviceTypes: Servicetype[] = [];
	servicesList: string[] = [];

	date = Date.now();

	servicesDatabase: any;
	servicesDatabaseArray: Service[] = [];
	filteredServicesDatabase: Service[] = [];
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
		this.http.get<Array<Servicetype>>("http://localhost:8080/servicetpyes").subscribe(
			data => {
				this.serviceTypes = data;
				this.servicesList = data.map(x => x.type);
			}
		);

		this.http.get<Array<Service>>("http://localhost:8080/services").subscribe(
			data => {
				this.servicesDatabaseArray = data;
				this.filteredServicesDatabase = data;

				data.forEach(service => {
					if (service.price > this.maxPrice)
						this.maxPrice = service.price;
				});

				this.maxValue = this.maxPrice;

				this.sortBy("Name");
			}
		);
	}

	getServicetypeById(id: number): string | undefined {
		return this.serviceTypes.find(x => x.id === id)?.type;
	}

	getServicetypeByType(type: any): number | undefined {
		return this.serviceTypes.find(x => x.type === type)?.id;
	}

	handlePageEvent(e: PageEvent) {
		this.length = e.length;
		this.pageSize = e.pageSize;
		this.pageIndex = e.pageIndex;

		this.length = this.filteredServicesDatabase.length;
		this.viewerServicesDatabase = this.filteredServicesDatabase.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
		this.servicesDatabase = new MatTableDataSource(this.viewerServicesDatabase);
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
			this.filteredServicesDatabase.sort(this.compare);
		else
			this.filteredServicesDatabase.sort(this.compare).reverse();


		this.length = this.filteredServicesDatabase.length;
		this.viewerServicesDatabase = this.filteredServicesDatabase.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
		this.servicesDatabase = new MatTableDataSource(this.viewerServicesDatabase);
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

	minLimit() {
		if (this.minValue < 0)
			this.minValue = 0;
		else if (this.minValue > this.maxValue)
			this.minValue = this.maxValue;
	}

	maxLimit() {
		if (this.maxValue < this.minValue)
			this.maxValue = this.minValue;
		else if (this.maxValue > this.maxPrice)
			this.maxValue = this.maxPrice;
	}

	search() {
		this.filteredServicesDatabase = [];

		this.searchFilter();
		this.serviceFilter();
		this.priceFilter();

		this.sortBy(SearchServiceComponent.Column);
		this.sortBy(SearchServiceComponent.Column);
		
		this.length = this.filteredServicesDatabase.length;
		this.viewerServicesDatabase = this.filteredServicesDatabase.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
		this.servicesDatabase = new MatTableDataSource(this.viewerServicesDatabase);
	}

	searchFilter() {
		if (this.searchText.length >= 3) {
			let regex = RegExp(this.searchText); 

			this.servicesDatabaseArray.filter(x => {
				let y = null;

				if (regex.test(x.name)) {
					y = x;
					this.filteredServicesDatabase.push(x);
				}

				if (y === null) {
					if (regex.test(x.email)) {
						y = x;
						this.filteredServicesDatabase.push(x);
					}
					
					if (y === null)
						if (regex.test(x.telephone))
							this.filteredServicesDatabase.push(x);
				}
			});
		}
		else
			this.filteredServicesDatabase = this.servicesDatabaseArray;
	}

	serviceFilter() {
		if (this.services.value != undefined && this.services.value != "") {	
			let filtered = this.filteredServicesDatabase;
			this.filteredServicesDatabase = [];

			for (let i = 0; i < this.services.value?.length; i++) {
				let service = this.getServicetypeByType(this.services.value[i]);
				
				filtered.filter(x => {
					if (x.type === service)
						this.filteredServicesDatabase.push(x);
				})
			}
		}
	}

	priceFilter() {
		let filtered = this.filteredServicesDatabase;
		this.filteredServicesDatabase = [];

		filtered.filter(x => {
			if (x.price >= this.minValue && x.price <= this.maxValue)
				this.filteredServicesDatabase.push(x);
		});
	}

	blockButton(service: Service) : boolean {
		return service.status != 0 || service.userid === AppComponent.loggedInUser?.id;
	}

	onClick(service: Service) {
		if (service.status === 0 && service.userid != AppComponent.loggedInUser?.id && AppComponent.loggedInUser?.id != undefined) {
			if(confirm("Are you sure you want to reserve this service?")) {
				service.status = 2;
				service.reserveduserid = AppComponent.loggedInUser?.id;
	
				this.http.put<Service>("http://localhost:8080/services/" + service.id, service).subscribe({
					next: _ => alert("The reservation intention has been sent to the advertiser."),
					error: error => console.error('There was an error!', error.message)
				});
			}
		}
	}
}
