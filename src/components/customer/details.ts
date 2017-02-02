import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {CustomerService} from '../../services/customerService';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Customer} from '../../models/customer';

declare let $: any;
declare let Materialize: any;

@Component({
    selector: 'customer-details',
    templateUrl: 'details.html'
})
export class CustomerDetailsComponent implements OnInit, AfterViewInit {

    public customer: FormGroup;

    constructor(private _router: Router,
                private _location: Location,
                private _route: ActivatedRoute,
                private _customerService: CustomerService) {

    }

    public ngOnInit(): void {
        this._route.data
            .subscribe((data: { customer: Customer }) => {
                this.customer = new FormGroup({
                    name: new FormControl(data.customer.name, [Validators.required, Validators.minLength(3)]),
                    country: new FormControl(data.customer.country),
                    countryCode: new FormControl(data.customer.countryCode),
                    city: new FormControl(data.customer.city),
                    phone: new FormControl(data.customer.phone),
                    id: new FormControl(data.customer.id)
                });
            });

    }

    public ngAfterViewInit(): void {
        $(document).ready(() => Materialize.updateTextFields());

    }

    public navigateBack(): void {
        this._location.back();
    }

    public deleteCustomer(id: number): void{
        this._customerService.deleteCustomerById(id)
            .subscribe(()=> this._location.back());
    }

    public saveCustomer(value: Customer): void {
        let observable = null;
        if (value.id) {
            observable = this._customerService.addCustomer(<Customer>value);
        } else {
            observable = this._customerService.updateCustomer(<Customer> value);
        }
        observable.subscribe(
            result => this._router.navigate([`/customers`])
        );
    }
}
