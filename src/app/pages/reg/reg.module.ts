import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegRoutingModule } from './reg-routing.module';
import { RegComponent } from './reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


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
    MatInputModule,
    MatRadioModule,
    MatIconModule
  ]
})
export class RegModule { }
