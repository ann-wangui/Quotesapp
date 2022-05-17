import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  quote: Quotes [] =[
    new Quotes(0,0 ,completeDate(2022,4,10),"ann","everthing happens with a reason"),
    new Quotes( 0,0 ,completeDate(2022,5,7),"mercy","everyday is a new day"),
     new Quotes(0,0, completeDate(2022,4,10),"shadrack","we are meant to win")
  ];

  get sortedQuoty(){
    return this.quote.sort((a , b) =>{
      return<any>new Date(b.completeDate)-<any>new Date(a.completeDate);
    });

  }

  toggleDetails(index:number){

    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete:any, index : any){
    console.log('from child to parent', isComplete)
    if(isComplete){
      let todelete =confirm('Are you sure you want to delete this quote?')
      if(todelete){
      this.quote.splice(index,1)
      }

    }
  }

  addQuote(quote:any){
    let arraysize = this.quote.length;
    quote.id =arraysize+1;
    quote.author = (quote.author); 
    quote.quote = (quote.quote)
    quote.completeDate =new Date(quote.completeDate)
    this.quote.push(quote)

  }


  first!:number;
  last!:number;
  count!:number;

  highest(){
    this.first = 0
    this.last = 0

    for(this.count=0; this.count <this.quote.length; this.count++){
    this.last =this.quote[this.count].upvotes;
    if(this.last>this.first){this.first = this.last}
  }
  return this.first
}   

  constructor() { }

  ngOnInit(): void {
  }

}
function completeDate(arg0: number, arg1: number, arg2: number): any {
  throw new Error('Function not implemented.');
}

