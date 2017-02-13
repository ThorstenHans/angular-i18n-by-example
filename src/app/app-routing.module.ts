import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from '../components/customer/list';
import {CustomerResolver} from '../resolvers/customerResolver';
import {CustomerDetailsComponent} from '../components/customer/details';

const routes: Routes = [
    {
        path: 'customers',
        component: CustomerListComponent
    },
    {
        path: 'customers/add',
        component: CustomerDetailsComponent,
        resolve: {
            customer: CustomerResolver
        }
    },
    {
        path: 'customers/:id',
        component: CustomerDetailsComponent,
        resolve: {
            customer: CustomerResolver
        }
    },
    {
        path: '**',
        redirectTo: 'customers'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
