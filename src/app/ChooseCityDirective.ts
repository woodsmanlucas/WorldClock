import { Component, OnInit } from '@angular/core';
import { MyCitiesService} from './myCitiesService'

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'choose-city',
    templateUrl: './choose_city.html',
    providers: [MyCitiesService]
})
export class choose_city implements OnInit {
  cities: Array<string>;
  selectedcity: string;

  ngOnInit()
  {
  this.selectedcity = "vancouver";
  }

  constructor(MyCitiesService: MyCitiesService) {
      this.cities = MyCitiesService.getCities();
  }

  onClick(city){
    console.log(city);
  }
}
