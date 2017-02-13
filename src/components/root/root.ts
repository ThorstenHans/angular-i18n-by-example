import {Component, Inject} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {BROWSER_LANGUAGE} from '../../constants/all';

@Component({
    selector: 'app-root',
    templateUrl: 'root.html'
})
export class RootComponent {

    constructor(private _translateService: TranslateService,
                @Inject(BROWSER_LANGUAGE) private _browserLocale: string) {

    }

    public ngOnInit(): void {
        this._translateService.addLangs(['en-US', 'de-DE']);
        this._translateService.setDefaultLang('en-US');
        this._translateService.use(this._browserLocale);
    }

}
