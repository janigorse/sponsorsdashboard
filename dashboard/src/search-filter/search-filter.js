import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {SearchText} from '../messages';

@inject(EventAggregator)
export class SearchFilter{
    @bindable searchTerm = "";

    constructor(ea) {
        this.ea = ea;
    }

    searchKey(){
        this.ea.publish(new SearchText(this.searchTerm));
    }
}