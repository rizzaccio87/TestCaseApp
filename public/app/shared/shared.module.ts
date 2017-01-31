import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent }   from './modal/modal.component';
import { OpenWithDirective } from './modal/open-with.directive';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        ModalComponent, 
        OpenWithDirective,
        TabsComponent,
        TabComponent
    ],
    exports: [
        ModalComponent, 
        OpenWithDirective,
        TabsComponent,
        TabComponent
    ]
})
export class SharedModule { }
