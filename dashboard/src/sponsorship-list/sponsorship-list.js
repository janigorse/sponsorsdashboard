import {WebAPI} from '../web-api';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {SponsorshipCreated,SponsorshipViewed, SearchText} from '../messages';

@inject(WebAPI,EventAggregator)
export class SponsorshipList {
    

    constructor(api, ea){
        this.api = api;
        this.ea = ea;
        this.sponsorships = [];
        this.sortOrder = 'descending';   
        this.sortOrderValue = true; 

        ea.subscribe(SponsorshipViewed, msg => this.select(msg.sponsorship));
        ea.subscribe(SponsorshipCreated, msg => {
            this.api.getSponsorships().then(sponsorships => this.sponsorships = sponsorships);
        });
        ea.subscribe(SearchText, msg => {
            this.searchTerm = msg.text;
        });

        //this.api.getSponsorships();
    }

    created() {
        this.api.getSponsorships().then(sponsorships => this.sponsorships = sponsorships);
    }

    sortToggle(property){
        if (this.sortProperty && property !== this.sortProperty){
            this.sortOrder = 'ascending';
        }
        else
        {
            this.sortOrderValue = !this.sortOrderValue;
            this.sortOrder = this.sortOrderValue ? 'ascending' : 'descending';
        }

        this.sortProperty = property;
        console.log(this.sortOrder);
    }

    filterFunc(searchExpression, sponsorship){
        for (var property in sponsorship) {
            
            let itemValue = sponsorship[property];
            if (!Number.isInteger(itemValue) && !(itemValue instanceof Date))
            {
                if(!searchExpression || !itemValue) return false;
            
                let calculation = itemValue.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;
                if (calculation) {
                    return calculation;
                }
                    
            }
        }
        /*
        let itemValue = sponsorship.sponsoree;
        if(!searchExpression || !itemValue) return false;
        
        return itemValue.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;
        */
     }
    

}