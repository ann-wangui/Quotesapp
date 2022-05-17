import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quote = new Quotes(0,0 , completeDate(),"","")
  @Output () add = new EventEmitter<Quotes> ();

  addNewQuote (){
    this.add.emit(this.quote);
    this.quote= new Quotes (0,0 , completeDate(),"","")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function completeDate(): Date {
  throw new Error('Function not implemented.');
}

