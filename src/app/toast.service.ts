import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ToastService {

    public Toast = new Subject();

    constructor(){

    }

    public ShowToast(message): void{
        debugger;
        this.Toast.next(message);
    }
}