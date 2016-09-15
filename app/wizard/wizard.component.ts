import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, Route, CanDeactivate} from '@angular/router';
import 'rxjs/add/operator/filter';
import {UserWizardsService} from "../services/userWizards.service";
import {Wizard} from "../models/wizard";

@Component({
    selector: 'wizard',
    template: `
<h1>Wizard Wizard</h1>

<router-outlet></router-outlet>

<div *ngIf="activeStepIndex != undefined">
    <button *ngIf="activeStepIndex > 0" class="btn" [routerLink]="steps[activeStepIndex - 1].path">Previous</button>
    <button *ngIf="activeStepIndex < steps.length - 1" class="btn btn-primary" [routerLink]="steps[activeStepIndex + 1].path">Next</button>
    <button *ngIf="activeStepIndex === steps.length - 1" class="btn btn-primary" (click)="submit()">Submit</button>
</div>
`
})
export class WizardComponent implements OnDestroy {
    wizard = new Wizard();

    activeStepIndex: number;
    submitting = false;
    merlin;

    steps = [
        {path: 'type'},
        {path: 'info'},
        {path: 'confirmation'}
    ];

    constructor(
        activeRoute: ActivatedRoute,
        private router: Router,
        private userWizards: UserWizardsService)
    {
        window['clippy'].load('Merlin', (agent) => {
            this.merlin = agent;
            this.merlin.show();
        });

        router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(() => {
                let activeChildRoute = activeRoute.firstChild.routeConfig;
                this.activeStepIndex = this.steps.findIndex(step => step.path === activeChildRoute.path);

                this.merlin && this.merlin.animate();
            });
    }

    submit() {
        this.submitting = true;
        this.wizard.img = 'img/ralphWizard.jpg';
        this.userWizards.addWizard(this.wizard);
        this.router.navigate(['home']);
    }

    ngOnDestroy() {
        this.merlin.hide(true);
    }

    hasUnsavedChanges() : boolean {
        return !this.submitting && (this.wizard.name || this.wizard.age || this.wizard.type) !== undefined;
    }
}