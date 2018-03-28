import { Component } from "@angular/core";
import { details } from "../details";
import { PersonService } from "../service/person.service";


@Component({

    selector : 'app-person',
    templateUrl: './person.component.html'
})
export class PersonComponent{
data: details[] = [];

constructor(private personService: PersonService) {
}



Onsubmit(){
    console.log(this.data);
    this.personService.addPerson(new details(
        this.data['firstname'],
        this.data['lastname'],
        this.data['rollnumber'],
        this.data['branch'],
        this.data['collegename']
    ));
}



}