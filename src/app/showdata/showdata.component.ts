import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { details } from '../details';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  data: details[] = [];
  showDetails: boolean = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
   this.data=this.personService.getDetails();  }



// Onsubmit(){

//   console.log(this.personService.detail);
//  // this.data=this.personService.getDetails(); 
// }

}
