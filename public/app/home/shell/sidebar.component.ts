import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
        <user-profile class="app-drawer-header">
        </user-profile>
        <app-menu class="mdl-navigation mdl-color--blue-grey-800">
        </app-menu>
    `,
    styleUrls: ['app/home/shell/sidebar.style.css']
})
export class SidebarComponent {}