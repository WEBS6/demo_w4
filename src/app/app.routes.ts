import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from "./hero/hero-list/hero-list.component";
import { HeroDetailsComponent } from "./hero/hero-details/hero-details.component";
import { ExampleComponent } from "./example/example.comp";

export const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/:id', component: HeroDetailsComponent },
  { path: 'example', component: ExampleComponent },
];