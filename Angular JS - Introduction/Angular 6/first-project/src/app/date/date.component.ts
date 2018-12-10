import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;

  constructor() {
    /**
     * One of the way of asynchronous data binding.
     */
    setInterval(()=>{
      let currentDate=new Date();
      this.dateMessage=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();  
    },1000);
  }

  ngOnInit() {

  }

  someNumber: number=1;
  addTwoNumber(a: number,b: number){
    return a+b;
  }
}
