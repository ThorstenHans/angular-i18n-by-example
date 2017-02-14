import {DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Pipe({
    name: 'date'
})
export class DynamicDatePipe implements PipeTransform {

    constructor(private _translateService: TranslateService) {

    }

    public transform(value: any, pattern: string = 'mediumDate'): any {
        let ngPipe = new DatePipe(this._translateService.currentLang);
        return ngPipe.transform(value, pattern);
    }

}
