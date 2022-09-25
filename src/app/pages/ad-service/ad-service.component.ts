import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ad-service',
	templateUrl: './ad-service.component.html',
	styleUrls: ['./ad-service.component.scss']
})
export class AdServiceComponent implements OnInit {

	new_service = false;

	constructor() { }

	ngOnInit(): void {
	}

}
