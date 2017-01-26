import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { AvatarCardComponent } from '../avatar-card/avatar-card.component';

@Component({
    selector: 'avatars-container',
    templateUrl: 'app/authentication/signup/avatars-container/avatars-container.template.html',
    styleUrls: ['app/authentication/signup/avatars-container/avatars-container.style.css']
})
export class AvatarsContainerComponent implements OnInit, AfterContentInit {
    @ContentChildren(AvatarCardComponent) avatars: QueryList<AvatarCardComponent>;
    selectedAvatar: any;

    constructor() { }

    ngOnInit() { }

    ngAfterContentInit() { 
        let activeAvatars = this.avatars.filter((avatar) => avatar.isActive);
        if (activeAvatars.length === 0) {
            this.selectAvatar(this.avatars.first.id);
        }
    }

    selectAvatar(id: string) {
        // deactivate all avatars
        this.avatars.toArray().forEach((avatar) => {
           avatar.isActive = false;

           if (avatar.id === id) {
               this.selectedAvatar = avatar;
           }
        });

        // activate current one
        this.selectedAvatar.isActive = true;
    }
}