import { Component, Input } from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'clock',
    templateUrl: './clock.html',
})



export class Clock {
   now = new Date();
   utc = new Date(this.now.getTime() + this.now.getTimezoneOffset() * 60000);
   city = "vancouver"

   @Input()
   city: string;
}
