import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ToggleSponsorshipFormVisibility} from '../messages';

@inject(EventAggregator)
export class Navigation {
    constructor(ea) {
        this.ea = ea;
        this.showHideSponsorshipForm = false;
        this.ea.publish(new ToggleSponsorshipFormVisibility(this.showHideSponsorshipForm));
    }
    
    showHideSponsorshipFormToggle(){
        this.showHideSponsorshipForm = !this.showHideSponsorshipForm;
        this.ea.publish(new ToggleSponsorshipFormVisibility(this.showHideSponsorshipForm));
    }

}