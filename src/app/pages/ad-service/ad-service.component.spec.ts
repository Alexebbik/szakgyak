import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdServiceComponent } from './ad-service.component';

describe('AdServiceComponent', () => {
	let component: AdServiceComponent;
	let fixture: ComponentFixture<AdServiceComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdServiceComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(AdServiceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
