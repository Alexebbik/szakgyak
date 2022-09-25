import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'main',
		loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
	},
	{
		path: 'not-found',
		loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'reg',
		loadChildren: () => import('./pages/reg/reg.module').then(m => m.RegModule)
	},
	{
		path: 'profile',
		loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
	},
	{
		path: 'search-service',
		loadChildren: () => import('./pages/search-service/search-service.module').then(m => m.SearchServiceModule)
	},
	{
		path: 'ad-service',
		loadChildren: () => import('./pages/ad-service/ad-service.module').then(m => m.AdServiceModule)
	},
	{
		path: '**',
		redirectTo: '/not-found'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
