
import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ToggleSponsorshipFormVisibility} from './messages';

@inject(EventAggregator)
export class App {
    constructor(ea){
        this.ea = ea;
        this.isVisible = false;
        ea.subscribe(ToggleSponsorshipFormVisibility, msg => {
            this.isVisible = msg.visibility;
        });

    }
    /*
    @bindable searchTerm = "";

    filterFunc(searchExpression, value){
     
        let itemValue = value.text;
        if(!searchExpression || !itemValue) return false;
        
        return itemValue.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;
        
     }
     */
}
