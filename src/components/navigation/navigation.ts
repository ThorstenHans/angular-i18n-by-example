import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.html'
})
export class NavigationComponent implements OnInit {
    constructor() {

    }

    public ngOnInit(): void {
        $("#menu-toggle").sideNav();
    }

}
