import { Component } from '@angular/core';

// This is the service.
export class MyCitiesService {
    cites: Array<string>;
    constructor() {
      this.cites = ['paris', 'vancouver', 'new york', 'london', 'beijing', 'hong kong'];
    }
    getCities() {
      return this.cites;
    }
}
