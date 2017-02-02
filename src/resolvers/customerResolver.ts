import {Customer} from '../models/customer';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CustomerService} from '../services/customerService';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class CustomerResolver implements Resolve<Customer> {

    constructor(private _customerService: CustomerService) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer>|Promise<Customer>|Customer {
        if (!route.params['id']) {
            return new Customer();
        }
        let id = +route.params['id'];
        return this._customerService.getCustomerById(id)
            .catch(err => Observable.of(new Customer()));
    }
}
