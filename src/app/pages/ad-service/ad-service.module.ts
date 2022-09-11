import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdServiceRoutingModule } from './ad-service-routing.module';
import { AdServiceComponent } from './ad-service.component';


@NgModule({
  declarations: [
    AdServiceComponent
  ],
  imports: [
    CommonModule,
    AdServiceRoutingModule
  ]
})
export class AdServiceModule { }
