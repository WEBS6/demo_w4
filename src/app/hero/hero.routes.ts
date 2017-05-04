import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";

export const routes: Routes = [
    { path: '/heroes', component: HeroListComponent },
    { path: '/heroes/:heroId', component: HeroDetailsComponent },
];