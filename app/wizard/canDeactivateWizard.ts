import {Injectable} from '@angular/core';
import {CanDeactivate}  from '@angular/router';
import {WizardComponent} from "./wizard.component";

@Injectable()
export class CanDeactivateWizard implements CanDeactivate<WizardComponent> {

    canDeactivate(component: WizardComponent)  {
        if(component.hasUnsavedChanges()) {
            return confirm("You have unsaved changes. Are you sure you want to leave the wizard wizard?");
        } else {
            return true;
        }
    }
}