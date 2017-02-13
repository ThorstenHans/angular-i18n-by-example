import {RootComponent} from './root/root';
import {NavigationComponent} from './navigation/navigation';
import {SideNavigationComponent} from './sideNavigation/sideNavigation';
import {CustomerListComponent} from './customer/list';
import {CustomerDetailsComponent} from './customer/details';
import {LanguagePickerComponent} from './languagePicker/languagePicker';

export const ALL_COMPONENTS: Array<any> = [
    RootComponent,
    NavigationComponent,
    SideNavigationComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    LanguagePickerComponent
];

export const BOOTSTRAP_COMPONENT: any = RootComponent;
