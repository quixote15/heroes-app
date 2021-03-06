import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
 
  heroes = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
   // this.heroes = this.heroService.getHeroes()
   this.getHeroes()
  }

  getHeroes(){
    this.heroService.getHeroesObservable()
      .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
