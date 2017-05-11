import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroModule } from "./hero/hero.module";

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from "@angular/router";
import { ExampleModule } from "./example/example.module";
import { ToastModalComponent } from './toast-modal/toast-modal.component';
import { ToastService } from "./toast.service";

@NgModule({
  declarations: [
    AppComponent,
    ToastModalComponent,
  ],
  imports: [
    ExampleModule,
    RouterModule.forRoot(routes),
    HeroModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}