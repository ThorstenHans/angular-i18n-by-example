import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from '../components/customer/list';
import {CustomerDetailsComponent} from '../components/customer/details';
import {FaqListComponent} from '../components/faqs/list';
import {FaqDetailsComponent} from '../components/faqs/details';
import {CustomerResolver} from '../resolvers/customerResolver';

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
        path: 'faqs',
        component: FaqListComponent
    },
    {
        path: 'faqs/:id',
        component: FaqDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
