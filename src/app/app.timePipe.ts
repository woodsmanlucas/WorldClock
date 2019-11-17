import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'timePipe'})

export class timePipe implements PipeTransform{
    transform(time:Date, city: string) : Date {
        let timeCities = {'vancouver' : -8, 'new york' : -5, 'london' : 0, 'paris' : 1, 'hong kong' : 8, 'beijing' : 8}

        let output = new Date (time.getTime() + timeCities[city]* 60 * 60 *1000)

        return output;
    }
}