import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent }   from './modal/modal.component';
import { OpenWithDirective } from './modal/open-with.directive';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ModalComponent, OpenWithDirective],
    exports: [ModalComponent, OpenWithDirective]
})
export class SharedModule { }
