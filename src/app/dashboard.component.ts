import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  topHeroes: Hero[];

  constructor(private heroService: HeroService){}

  getTopHeroes(): void  {
    this.heroService.getHeroes().then(heroes => this.topHeroes = heroes.slice(1,5));
  }

  ngOnInit() {
    this.getTopHeroes();
  }
}
