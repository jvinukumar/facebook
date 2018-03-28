import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './service/person.service';
import { ShowdataComponent } from './showdata/showdata.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
