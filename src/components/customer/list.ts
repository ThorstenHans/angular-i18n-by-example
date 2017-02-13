import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customerService';
import {Customer} from '../../models/customer';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'customer-list',
    templateUrl: 'list.html'
})
export class CustomerListComponent implements OnInit {

    public customers: Array<Customer> = [];

    constructor(private _translateService: TranslateService, private _customerService: CustomerService) {

    }

    public get currentLanguage(): string {
        return this._translateService.currentLang;
    }

    public ngOnInit(): void {
        this._customerService.getAllCustomers()
            .subscribe(
                (allCustomers) => this.customers = allCustomers
            );

    }

}
