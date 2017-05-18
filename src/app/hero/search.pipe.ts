import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(value, term: string){
        if (!value || !term) return value;
        term = term.toUpperCase();
        return value.filter((item) => {
            let stringValue = JSON.stringify(item).toUpperCase();
            if(stringValue.includes(term)){
                return JSON.parse(stringValue);
            }
        })
    }
}