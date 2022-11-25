import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/Service';

@Component({
	selector: 'app-ad-service',
	templateUrl: './ad-service.component.html',
	styleUrls: ['./ad-service.component.scss']
})
export class AdServiceComponent implements OnInit {

	new_service = false;
	service: any;

	constructor() { }

	ngOnInit(): void {
	}

	setNewService(value: boolean) {
		this.new_service = value;
	}

	setService(value: Service) {
		this.service = value;
	}
}
