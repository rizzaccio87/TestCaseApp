import {Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
    selector: 'tabs',
    templateUrl: 'app/shared/tabs/tabs.template.html',
    styleUrls: ['app/shared/tabs/tabs.style.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    constructor() { }

    ngOnInit() { }

    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.isActive);
        if(activeTabs.length === 0){
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: TabComponent) {
        // deactivate all tabs
        this.tabs.toArray().forEach((tab) => {
           tab.isActive = false;
        });

        // activate current one
        tab.isActive = true;
    }
}