import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { Router, ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers:[HeroService]
})
export class HeroListComponent implements OnInit {

  public heroes: Hero[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  public goTo(hero: Hero) : void {
    this.router.navigate(['/heroes', hero.id]);
  }

}
