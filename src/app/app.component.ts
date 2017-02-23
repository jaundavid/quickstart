import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
styles: [`

`],
selector: 'my-app',
template:`
  <h1>{{title}}</h1>
  <nav>
    <a routerLink='/heroes' routerLinkActive="active">Heroes</a>
    <a routerLink='/dashboard' routerLinkActive="active">Dashboard</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['./app/app.component.css'],
providers: [
  HeroService
]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
