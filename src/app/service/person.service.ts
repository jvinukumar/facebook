import { details } from "../details";
import { OnInit, Injectable } from "@angular/core";

@Injectable()
export class PersonService implements OnInit {
    detail: details[] = [];

    constructor() { }

    ngOnInit() {

    }

    addPerson(personDetail: details) {
        this.detail.push(personDetail)
    }

    getDetails(){
        return this.detail;
    }
}