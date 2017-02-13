import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'language-picker',
    template: `<ul id="dropdown-languages" class="dropdown-content">
        <li *ngFor="let language of languages"><a href="" (click)="changeLanguage(language.key)">{{language.caption}}</a></li>
    </ul>`
})
export class LanguagePickerComponent implements OnInit {

    public languages: Array<{key: string, caption: string}> = [];

    constructor(private _translateService: TranslateService) {

    }

    public changeLanguage(languageKey: string){
        this._translateService.use(languageKey);
        return false;
    }

    public ngOnInit(): void {
        let languageKeys: Array<string> = this._translateService.getLangs();
        if (languageKeys && languageKeys.length) {
            languageKeys.forEach(languageKey => {
                this._translateService
                    .get(`languages.${languageKey}`)
                    .subscribe(languageCaption => this.languages.push({
                        key: languageKey,
                        caption: languageCaption
                    }));
            });
        }
    }

}
