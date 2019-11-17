import { Component } from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'clock',
    templateUrl: './clock.html',
})
export class Clock {
  now = new Date()
}
