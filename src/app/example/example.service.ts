import { Injectable } from '@angular/core';


@Injectable()
export class ServiceA {

    private counter: number = 0;
    public value: String = "Called ";

    public getValue(): String{
        this.counter++;
        return this.value + "" + this.counter;
    }

}