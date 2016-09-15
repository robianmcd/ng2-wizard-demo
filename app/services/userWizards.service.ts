import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Injectable} from "@angular/core";
import {Wizard} from "../models/wizard";

@Injectable()
export class UserWizardsService {
    private wizards = [
        new Wizard('Cartman', '10', 'Magician', 'img/cartmanWizard.png'),
        new Wizard('Old Wizard', '100', 'Warlock', 'img/oldWizard.png'),
        new Wizard('Gandalf', '2019', 'Sorcerer', 'img/gandalfWizard.jpg')
    ];

    public wizards$ = new BehaviorSubject(this.wizards);

    constructor() {

    }

    addWizard(newWizard) {
        this.wizards = [newWizard, ...this.wizards];
        this.wizards$.next(this.wizards);
    }
}