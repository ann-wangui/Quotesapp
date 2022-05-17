export class Quotes {
    showDescription: boolean;
    upvotes: number;
    downvotes: number;
    completeDate: Date;
    author: string;
    quote:string;
  showInfo: boolean;
  
    
  
    constructor(  upvotes:number, downvotes:number, completeDate:Date ,author:string ,quote:string){
      this.showInfo=false;

      // this.showDescription=false;
      // this.upvotes =0;
      // this.downvotes =0;
      // this.completeDate=new Date;
      // this.author="string"
    
    }
  }// export class Quotes {
  //     id: number;
  //     quote: string;
  //     upvotes: number;
  //     downvotes: number;
  //     constructor(id:number, quote:string, upvotes:number, downvotes:number){
  //       this.id = id;
  //       this.quote = quote;
  //       this.upvotes = upvotes;
  //       this.downvotes = downvotes;
  //     }
  // }