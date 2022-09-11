import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdServiceComponent } from './ad-service.component';

const routes: Routes = [{ path: '', component: AdServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdServiceRoutingModule { }
