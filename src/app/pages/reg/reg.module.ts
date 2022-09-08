import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegRoutingModule } from './reg-routing.module';
import { RegComponent } from './reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    CommonModule,
    RegRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class RegModule { }
