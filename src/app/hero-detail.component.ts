import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'

import 'rxjs/add/operator/switchMap';


import {Hero} from './hero';
import {HeroService} from './hero.service'

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }
}
