import {Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: 'app/authentication/modal/modal.template.html',
    styleUrls: ['app/authentication/modal/modal.style.css']
})
export class ModalComponent {
    private isOpen: boolean = false;
    private nextFn: Function;

    constructor() { }

    open(callback: Function) {
        this.nextFn = callback;
        this.isOpen = true;
    }

    ok(callback) {
        this.nextFn();
        this.isOpen = false;
    }

    cancel() {
        this.isOpen = false;
    }
}