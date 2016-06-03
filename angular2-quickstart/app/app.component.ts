import { Component } from '@angular/core'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'
import { HeroService } from './hero.service'
import { HeroDetailComponent } from './hero-detail.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
	selector: 'my-app',
	template: `
  		<h1>{{title}}</h1>
  		<nav>
	  		<a [routerLink]="['Dashboard']">Dashboard</a>
	  		<a [routerLink]="['Heroes']">Heroes</a>
  		</nav>
  		<router-outlet></router-outlet>
  		`,	
  	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS
		, HeroService],
	styleUrls: ['app/app.component.css'],

})

@RouteConfig([
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},

	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}])

export class AppComponent {
	title = 'Tour Of Heroes';
}