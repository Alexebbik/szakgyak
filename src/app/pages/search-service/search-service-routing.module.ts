import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchServiceComponent } from './search-service.component';

const routes: Routes = [{ path: '', component: SearchServiceComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SearchServiceRoutingModule { }
