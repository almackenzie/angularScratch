import { Component } from '@angular/core'
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
	
	constructor(private router: Router, private heroService: HeroService) { }
	
	title = 'Tour of Heroes';
	
	selectedHero: Hero;
	
	public heroes = HEROES;

	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail() {
		this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}

}

var HEROES: Hero[];