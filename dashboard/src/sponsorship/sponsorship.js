import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {SponsorshipCreated,SponsorshipViewed, ToggleSponsorshipFormVisibility} from '../messages';
import {WebAPI} from '../web-api';

@inject(WebAPI, EventAggregator)
export class Sponsorship {
    sponsorship = {};
    constructor(api, ea){
        this.api = api;
        this.ea = ea;
    }

    get canSave() {       
        return this.sponsorship.sponsoree && this.sponsorship.event && this.sponsorship.eventStartDate && this.sponsorship.eventEndDate && this.sponsorship.contractPrice && this.sponsorship.contractPrice >= 100;
    }


    save() {
        this.api.saveSponsorship(this.sponsorship).then(sponsorship => {
            this.sponsorship = sponsorship;
            this.ea.publish(new SponsorshipCreated(this.sponsorship));
            this.sponsorship = {};
        });
    }
}