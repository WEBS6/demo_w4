import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { Params, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  public heroId: number;
  public hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) =>{
       this.hero = this.heroService.getHero(+params['id']);
    })
   

  }

}
