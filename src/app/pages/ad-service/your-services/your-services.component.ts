import { Component, OnInit } from '@angular/core';
import { Basicdatabase } from 'src/app/shared/models/Basicdatabase';

@Component({
	selector: 'app-your-services',
	templateUrl: './your-services.component.html',
	styleUrls: ['./your-services.component.scss']
})
export class YourServicesComponent implements OnInit {

	basicdatabase: Basicdatabase[] = [
		{ id: 1, service: "valami", price: 69, status: "nincs", buttons: "edit, delete", name: "", phone: "", email: "" },
		{ id: 1, service: "semmi", price: 420, status: "van", buttons: "edit, delete", name: "", phone: "", email: "" },
		{ id: 1, service: "lehet", price: 666, status: "talán", buttons: "edit, delete", name: "", phone: "", email: "" },

	];

	constructor() { }

	ngOnInit(): void {
	}

}
