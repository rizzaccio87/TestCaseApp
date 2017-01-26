import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'avatar-card',
    templateUrl: 'app/authentication/signup/avatar-card/avatar-card.template.html',
    styleUrls: ['app/authentication/signup/avatar-card/avatar-card.style.css']
})
export class AvatarCardComponent implements OnInit {
    @Input() imgSrc: string;
    @Input() id: string;
    @Output() click: EventEmitter<any> = new EventEmitter();
    isActive: boolean = false;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() { }

    onClick() {
        this.click.emit(this.id);
    }
}