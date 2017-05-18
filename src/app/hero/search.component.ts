import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";


@Component({
  selector: 'hero-search',
  template: `
    <input [ngModel]="query | async" (ngModelChange)="updateQuery($event)">
  `
})
export class SearchComponent implements OnInit {

    public query : Subject<string>;
    
    ngOnInit(): void {
       this.query = new Subject();
       this.query
        .debounceTime(500)
        .subscribe(query => {
            this.search.emit(query);
        });

    }

    @Output()
    public search = new EventEmitter();

    public updateQuery(value){
        this.query.next(value);
    }

}
