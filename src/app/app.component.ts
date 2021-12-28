import { Component } from '@angular/core';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { numberDetails } from './format';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FilterPipePipe]
})
export class AppComponent {
  title = 'pipe-phonebook';
  number="";
  place_holder="";
  code="";
  result:any;
  constructor(private filter: FilterPipePipe) {}
  numberDetails=numberDetails;
  placeholderData(){
     this.place_holder=this.numberDetails[this.numberDetails.map(i => i.code).indexOf(this.code.slice(1,this.code.length))].placeholder;
     this.result='';
  }
  get(){
    this.result=`The Formatted Telephone Number : `+this.filter.transform(this.number,this.code);
    this.number='';
    this.code='';
    this.place_holder='';
  }
}
