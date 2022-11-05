import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent implements OnInit {

  num1='';
  resultado:number=0;
  print="";
  text:string[]=[];

  showTabla(){
    let num1:number=parseInt(this.num1);
    let text:string[]=[];
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
