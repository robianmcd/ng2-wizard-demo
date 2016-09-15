import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {WizardTypeComponent} from "./wizard/wizardType.component";
import {WizardComponent} from "./wizard/wizard.component";
import {WizardInfoComponent} from "./wizard/wizardInfo.component";
import {WizardConfirmationComponent} from "./wizard/wizardConfirmation.component";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule} from "@angular/forms";
import {UserWizardsService} from "./services/userWizards.service";
import {CanDeactivateWizard} from "./wizard/canDeactivateWizard";
import {AppComponent} from "./app.component";

const appRoutes: Route[] = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'wizard',
        component: WizardComponent,
        canDeactivate: [CanDeactivateWizard],
        children: [
            {path: '',  redirectTo: 'type'},
            {path: 'type', component: WizardTypeComponent},
            {path: 'info', component: WizardInfoComponent},
            {path: 'confirmation', component: WizardConfirmationComponent}
        ]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent, HomeComponent, WizardComponent, WizardTypeComponent, WizardInfoComponent, WizardConfirmationComponent],
    providers: [UserWizardsService, CanDeactivateWizard],
    bootstrap: [AppComponent]
})
class AppModule { }


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);