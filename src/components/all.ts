import {RootComponent} from './root/root';
import {NavigationComponent} from './navigation/navigation';
import {SideNavigationComponent} from './sideNavigation/sideNavigation';
import {CustomerListComponent} from './customer/list';
import {CustomerDetailsComponent} from './customer/details';
import {FaqListComponent} from './faqs/list';
import {FaqDetailsComponent} from './faqs/details';

export const ALL_COMPONENTS: Array<any> = [
    RootComponent,
    NavigationComponent,
    SideNavigationComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    FaqListComponent,
    FaqDetailsComponent
];

export const BOOTSTRAP_COMPONENT: any = RootComponent;
