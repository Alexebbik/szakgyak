import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchServiceRoutingModule } from './search-service-routing.module';
import { SearchServiceComponent } from './search-service.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
	declarations: [
		SearchServiceComponent
	],
	imports: [
		CommonModule,
		SearchServiceRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatIconModule,
		MatDatepickerModule,
		MatNativeDateModule,
		NgxMatDatetimePickerModule,
		NgxMatTimepickerModule,
		NgxMatNativeDateModule,
		MatPaginatorModule
	]
})
export class SearchServiceModule { }
