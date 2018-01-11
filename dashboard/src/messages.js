import {EventAggregator} from 'aurelia-event-aggregator';

export class SponsorshipCreated {
    constructor(sponsorship) {
      this.sponsorship = sponsorship;
    }
}

export class SponsorshipViewed {
    constructor(sponsorship) {
      this.sponsorship = sponsorship;
    }
}

export class ToggleSponsorshipFormVisibility {
  constructor(visibility) {
    this.visibility = visibility;
  }
}

export class SearchText {
  constructor(text) {
    this.text = text;
  }
}