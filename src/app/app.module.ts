import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {BOOTSTRAP_COMPONENT, ALL_COMPONENTS} from '../components/all';
import {ALL_SERVICES} from '../services/all';
import {ALL_RESOLVERS} from '../resolvers/all';
import {TranslateModule} from 'ng2-translate';
import {BROWSER_LANGUAGE} from '../constants/all';
import {ALL_PIPES} from '../pipes/all';
let language = navigator.language || navigator['userLanguage'];

@NgModule({
    declarations: [
        ...ALL_COMPONENTS,
        ...ALL_PIPES
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot()
    ],
    providers: [
        ...ALL_SERVICES,
        ...ALL_RESOLVERS,
        { provide: BROWSER_LANGUAGE, useValue: language }
    ],
    bootstrap: [BOOTSTRAP_COMPONENT]
})
export class AppModule {
}

