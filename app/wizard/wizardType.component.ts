import {Component} from "@angular/core";
import {WizardComponent} from "./wizard.component";

@Component({
    selector: 'wizard-type',
    template: `
<form>
    <h3>Select a wizard type</h3>
    <div class="radio" *ngFor="let type of types">
      <label>
        <input type="radio" name="type" [(ngModel)]="selectedType" [value]="type">
        {{type}}
      </label>
    </div>
</form>
`
})
export class WizardTypeComponent {
    types = ['Magician', 'Warlock', 'Sorcerer'];

    selectedType: string;

    constructor() {

    }
}