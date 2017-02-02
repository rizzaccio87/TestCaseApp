import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchComponent } from './search/simple/search.component';
import { QueryComponent } from './search/query/query.component';
import { AuthGuard } from '../authentication/authentication.guard';

export const HomeRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [ AuthGuard ],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'customers', component: CustomersComponent },
          { path: 'search', component: SearchComponent },
          { path: 'query', component: QueryComponent }
        ]
    }
];