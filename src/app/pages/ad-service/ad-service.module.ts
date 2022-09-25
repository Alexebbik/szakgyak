import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdServiceRoutingModule } from './ad-service-routing.module';
import { AdServiceComponent } from './ad-service.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { YourServicesComponent } from './your-services/your-services.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@NgModule({
	declarations: [
		AdServiceComponent,
		NewServiceComponent,
		YourServicesComponent
	],
	imports: [
		CommonModule,
		AdServiceRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule

	]
})
export class AdServiceModule { }
