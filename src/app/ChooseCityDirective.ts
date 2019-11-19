import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyCitiesService} from './myCitiesService';


// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'choose-city',
    templateUrl: './choose_city.html',
    providers: [MyCitiesService]
})
export class choose_city implements OnInit {
  cities: Array<string>;
  selectedcity : string;
  
  @Output() public childEvent = new EventEmitter();

  
  ngOnInit()
  {
    this.selectedcity = "vancouver";  

  }


  fireEvent(){

    this.childEvent.emit(this.selectedcity);

  }


  constructor(MyCitiesService: MyCitiesService) {
      this.cities = MyCitiesService.getCities();

      
  }

}
