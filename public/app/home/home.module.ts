import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { SharedModule as AppSharedModule } from '../shared/shared.module';
import { ButtonModule, 
         SplitButtonModule,
         MenuModule, 
         ToolbarModule, 
         DataTableModule, 
         SharedModule,
         MultiSelectModule,
         AccordionModule, 
         TabViewModule, 
         DropdownModule, 
         InputTextModule,
         SpinnerModule } from 'primeng/primeng';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './shell/header.component';
import { MenuComponent } from './shell/menu.component';
import { SidebarComponent } from './shell/sidebar.component';
import { DonutChartComponent } from './charts/donut-chart.component';
import { UserProfileComponent } from './shell/profile.component';
import { HomeRoutes } from './home.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryComponent } from './search/query/query.component';
import { QueryBuilderComponent } from './search/query/query-builder.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { SearchComponent } from './search/simple/search.component';

import { CustomersService } from './customers/customers.service';
import { SearchService } from './search/search.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppSharedModule,
        ButtonModule, 
        SplitButtonModule, 
        MenuModule, 
        ToolbarModule, 
        DataTableModule, 
        SharedModule, 
        MultiSelectModule, 
        AccordionModule,
        TabViewModule, 
        DropdownModule, 
        InputTextModule,
        SpinnerModule,
        RouterModule.forChild(HomeRoutes)
    ],
    declarations: [ 
        HomeComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        DonutChartComponent,
        UserProfileComponent,
        DashboardComponent,
        QueryComponent,
        QueryBuilderComponent,
        CustomersComponent,
        CustomerDetailsComponent,
        SearchComponent
    ],
    providers: [
        CustomersService,
        SearchService
    ]
})
export class HomeModule { }