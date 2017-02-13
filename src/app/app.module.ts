import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {BOOTSTRAP_COMPONENT, ALL_COMPONENTS} from '../components/all';
import {ALL_SERVICES} from '../services/all';
import {ALL_RESOLVERS} from '../resolvers/all';
import {ALL_PIPES} from '../pipes/all';

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
        AppRoutingModule
    ],
    providers: [
        ...ALL_SERVICES,
        ...ALL_RESOLVERS
    ],
    bootstrap: [BOOTSTRAP_COMPONENT]
})
export class AppModule {
}
