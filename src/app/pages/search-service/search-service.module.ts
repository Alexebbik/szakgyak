import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchServiceRoutingModule } from './search-service-routing.module';
import { SearchServiceComponent } from './search-service.component';


@NgModule({
  declarations: [
    SearchServiceComponent
  ],
  imports: [
    CommonModule,
    SearchServiceRoutingModule
  ]
})
export class SearchServiceModule { }
