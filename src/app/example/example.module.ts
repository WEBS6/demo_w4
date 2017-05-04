import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExampleComponent, CompB, CompA } from "./example.comp";
import { ServiceA } from "./example.service";


@NgModule({
  imports: [],
  declarations: [CompA],
  exports: [CompA],
  providers: [ServiceA], //de enige die de service provide!
})
export class SubModule {}

@NgModule({
  imports: [
    SubModule
  ],
  declarations: [ExampleComponent, CompB],
  exports: [ExampleComponent],
  providers: [], //leeg voor het laatste voorbeeld
})
export class ExampleModule { }

