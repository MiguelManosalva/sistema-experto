import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMoney' })

export class FormatMoneda implements PipeTransform {

    transform(value: any, args?: any): any {
        let num = value;
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            num = num.split('').reverse().join('').replace(/^[\.]/, '');
            value = num;
        }
        return `${args} ${value}`;
    }
}