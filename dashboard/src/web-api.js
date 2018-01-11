import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient, json)
export class WebAPI {

  getSponsorships(){

    let client = new HttpClient();

    return client.fetch('http://localhost:5000/api/sponsorship')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    
  }
  

  saveSponsorship(sponsorship){

    let client = new HttpClient();
    return client.fetch('http://localhost:5000/api/sponsorship', {
      method: 'post',
      body: json(sponsorship)
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    
  }
}
