import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Facts About Numbers';
  month_h!: any;
  day_y!: any;
  number_r!: any;
  year_r!: any;
  quote:any= [];
  data:any;
  text!:string;
  number!: string;
  date!:string;
  year!:string;
  found:boolean = false;


  constructor(private serviceSvc: ServiceService){}
  ngOnInit(): void {
    
  }

  dateSubmit() {
    this.serviceSvc.searchDateFact(this.month_h, this.day_y).subscribe(
      res=>{this.quote=res, 
      this.data = Object.values(this.quote),
      this.text=this.data[0],
      this.date=this.data[1],
      this.found=this.data[3]},
      err=>console.log(err)
    )
    
}
yearSubmit() {
  this.serviceSvc.searchYearFact(this.year_r).subscribe(
    res=>{this.quote=res, 
    this.data = Object.values(this.quote),
    this.date=this.data[0],
    this.text=this.data[1],
    this.year=this.data[2],
    this.found=this.data[3]},
    err=>console.log(err)
  )
}
mathSubmit() {
  this.serviceSvc.searchMathFact(this.number_r).subscribe(
    res=>{this.quote=res, 
    this.data = Object.values(this.quote),
    this.text=this.data[0],
    this.number=this.data[1],
    this.found=this.data[2]},
    err=>console.log(err)
  )
}
triviaSubmit() {
  this.serviceSvc.searchTriviaFact(this.number_r).subscribe(
    res=>{this.quote=res, 
    this.data = Object.values(this.quote),
    this.text=this.data[0],
    this.number=this.data[1],
    this.found=this.data[2]},
    err=>console.log(err)
  )
}

}
