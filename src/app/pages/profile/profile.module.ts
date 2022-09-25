import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
	declarations: [
		ProfileComponent
	],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatRadioModule,
		MatIconModule
	]
})
export class ProfileModule { }
