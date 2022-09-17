import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchServiceRoutingModule } from './search-service-routing.module';
import { SearchServiceComponent } from './search-service.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SearchServiceComponent
  ],
  imports: [
    CommonModule,
    SearchServiceRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class SearchServiceModule { }
