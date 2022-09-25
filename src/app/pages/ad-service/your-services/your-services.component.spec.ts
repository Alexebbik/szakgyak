import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourServicesComponent } from './your-services.component';

describe('YourServicesComponent', () => {
	let component: YourServicesComponent;
	let fixture: ComponentFixture<YourServicesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [YourServicesComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(YourServicesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
