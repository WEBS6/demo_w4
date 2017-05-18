import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from "./hero.service";
import { SearchPipe } from "./search.pipe";
import { SearchComponent } from "./search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    SearchPipe,
    HeroListComponent,
    HeroDetailsComponent,
    SearchComponent
  ],
  exports: [
    HeroListComponent,
    HeroDetailsComponent
  ],
  providers: [HeroService], //hier komen we volgende week op terug!
})
export class HeroModule { }