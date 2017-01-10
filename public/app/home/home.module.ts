import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { ButtonModule, SplitButtonModule, MenuModule, ToolbarModule, DataTableModule, SharedModule, MultiSelectModule, TabViewModule, DropdownModule, AccordionModule } from 'primeng/primeng';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryComponent } from './query/query.component';
import { CustomersComponent } from './customers/customers.component';

import { CustomersService } from './customers/customers.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule, SplitButtonModule, MenuModule, ToolbarModule, DataTableModule, SharedModule, MultiSelectModule, TabViewModule, DropdownModule, AccordionModule,
        RouterModule.forChild(HomeRoutes)
    ],
    declarations: [ 
        HomeComponent,
        DashboardComponent,
        QueryComponent,
        CustomersComponent
    ],
    providers: [
        CustomersService
    ]
})
export class HomeModule { }