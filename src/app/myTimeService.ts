import { Component } from '@angular/core';

// This is the service.
export class MyDataService {
    timeLookup: Object;
    constructor() {
      this.timeLookup = {'paris': 60, 'vancouver': -480, 'new york': -300, 'london': 0, 'beijing': 480, 'hong kong': 480};
    }
    getTime(city) {
      return this.timeLookup[city];
    }
}
