import { Component, OnInit } from '@angular/core';
import { ServiceA } from "./example.service";

@Component({
  selector: 'example',
  template: `
    <h2>Example of different providers</h2>
    <comp-a></comp-a>
    <comp-b></comp-b>
  `
})
export class ExampleComponent {}

@Component({
  selector: 'comp-a',
  template: `<p>Comp A: {{value}}</p>`
})
export class CompA {
    public value: String;
    constructor(serviceA: ServiceA){
        this.value = serviceA.getValue();
    }
}

@Component({
  selector: 'comp-b',
  template: `<p>Comp B: {{value}}</p>`
})
export class CompB {
    public value: String;
    constructor(serviceA: ServiceA){
        this.value = serviceA.getValue();
    }
}
