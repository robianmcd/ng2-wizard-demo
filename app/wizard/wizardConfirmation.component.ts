import {Component} from '@angular/core';
import {WizardComponent} from "./wizard.component";

@Component({
    selector: 'wizard-confirmation',
    template: `
<h3>Confirmation</h3>
<p>
    You are creating a 
    <strong>{{wizardComponent.wizard.age}}</strong> year old 
    <strong>{{wizardComponent.wizard.type}}</strong> wizard 
    named <strong>{{wizardComponent.wizard.name}}</strong>.
</p>
`
})
export class WizardConfirmationComponent {
    constructor(public wizardComponent: WizardComponent) {

    }
}