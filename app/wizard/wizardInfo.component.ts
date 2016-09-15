import {Component, Host} from '@angular/core';
import {WizardComponent} from "./wizard.component";

@Component({
    selector: 'wizard-info',
    template: `
<form>
    <h3>Enter the wizard information</h3>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" [(ngModel)]="wizardComponent.wizard.name" required>
    </div>
    <div class="form-group">
        <label for="name">Age</label>
        <input type="number" class="form-control" name="age" [(ngModel)]="wizardComponent.wizard.age" required>
    </div>
</form>
`
})
export class WizardInfoComponent {
    constructor(public wizardComponent: WizardComponent) {

    }
}