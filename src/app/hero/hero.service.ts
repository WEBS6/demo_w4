import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Hero } from "./hero";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

@Injectable()
export class HeroService {

    //subjects vs observables, dit doen we volgende week!
    //public HeroesObservable : Observable<Hero[]>;
    //public HeroesSubject : Subject<Hero>;

    private _heroes: Hero[];

    constructor(http: Http){
        this._heroes = [];
        this._heroes[0] = new Hero(1, "Bedmen");
        this._heroes[1] = new Hero(2, "Wonden woman");
        this._heroes[2] = new Hero(3, "Flesje");
        this._heroes[3] = new Hero(4, "Supermarktman");
        this._heroes[4] = new Hero(5, "Green Lantaarnpaal");
    }

    public getHeroes(){
        return this._heroes;
    }

    public getHero(id: number){
        return this._heroes[id -1];
    }
}