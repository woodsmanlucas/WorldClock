import { Component } from '@angular/core';
import { networkInterfaces } from 'os';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'clock',
    templateUrl: './clock.html',
})
export class Clock {
   now = new Date();
   utc : Date = new Date(this.now.getTime() + this.now.getTimezoneOffset() * 60000);
}
