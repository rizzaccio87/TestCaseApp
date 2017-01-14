import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { ButtonModule, 
         SplitButtonModule,
         MenuModule, 
         ToolbarModule, 
         DataTableModule, 
         SharedModule,
         MultiSelectModule, 
         TabViewModule, 
         DropdownModule, 
         AccordionModule, 
         InputTextModule } from 'primeng/primeng';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryComponent } from './query/query.component';
import { QueryBuilderComponent } from './query/query-builder.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchComponent } from './search/search.component';

import { CustomersService } from './customers/customers.service';
import { SearchService } from './search/search.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule, 
        SplitButtonModule, 
        MenuModule, 
        ToolbarModule, 
        DataTableModule, 
        SharedModule, 
        MultiSelectModule, 
        TabViewModule, 
        DropdownModule, 
        AccordionModule,
        InputTextModule,
        RouterModule.forChild(HomeRoutes)
    ],
    declarations: [ 
        HomeComponent,
        DashboardComponent,
        QueryComponent,
        QueryBuilderComponent,
        CustomersComponent,
        SearchComponent
    ],
    providers: [
        CustomersService,
        SearchService
    ]
})
export class HomeModule { }