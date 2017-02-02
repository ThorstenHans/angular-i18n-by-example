import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customerService';
import {Customer} from '../../models/customer';
import {Router} from '@angular/router';

@Component({
    selector: 'customer-list',
    templateUrl: 'list.html'
})
export class CustomerListComponent implements OnInit {

    public customers: Array<Customer> = [];

    constructor(private _router: Router, private _customerService: CustomerService) {

    }

    public ngOnInit(): void {
        this._customerService.getAllCustomers()
            .subscribe(
                (allCustomers) => this.customers = allCustomers
            );

    }

}
