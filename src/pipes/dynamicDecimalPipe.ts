import {DecimalPipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Pipe({
    name: 'number'
})
export class DynamicDecimalPipe implements PipeTransform {

    constructor(private _translateService: TranslateService) {

    }

    public transform(value: any, digits: string = null, currentLocale: string): any {
        let ngPipe = new DecimalPipe(currentLocale || this._translateService.currentLang);
        return ngPipe.transform(value, digits);
    }

}
