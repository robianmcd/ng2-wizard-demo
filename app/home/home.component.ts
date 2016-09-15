import { Component } from '@angular/core';
import {UserWizardsService} from "../services/userWizards.service";

@Component({
    selector: 'home',
    template: `
<div>
    <h1>My Wizards</h1>
    <a class="btn btn-lg btn-primary" routerLink="/wizard/type">Create a Wizard</a>

    <div class="media" *ngFor="let wizard of (userWizards.wizards$ | async)">
      <div class="media-left">
        <img class="media-object" [src]="wizard.img" style="max-width: 150px;">
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{wizard.name}}</h4>
        <div><strong>Type:</strong> {{wizard.type}}</div>
        <div><strong>Age:</strong> {{wizard.age}}</div>
      </div>
    </div>
</div>
`
})
export class HomeComponent {
    constructor(public userWizards: UserWizardsService) {

    }
}
