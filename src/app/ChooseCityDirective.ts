import { Component } from '@angular/core';
import { MyCitiesService} from './myCitiesService'

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'choose-city',
    templateUrl: './choose_city.html',
    providers: [MyCitiesService]
})
export class choose_city {
  cities: Array<string>;

  constructor(MyCitiesService: MyCitiesService) {
      this.cities = MyCitiesService.getCities();
  }
}
