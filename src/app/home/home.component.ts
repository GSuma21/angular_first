import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 

  constructor( private route:ActivatedRoute) { 
   
  }
name:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) =>{
      console.log(params)
      this.name = params.data;
    })
  }

}
