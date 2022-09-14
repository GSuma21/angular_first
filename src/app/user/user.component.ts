import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {


  constructor(private route:Router) { }
  name=""
//   displayName =""
//   displayEmail=""
// getName(val:string){
 
//   this.displayName = val;
// }
// getEmail(val:string){
 
//   this. displayEmail = val;
// }

// display(){
//   alert(this.displayName)

// }

navTo(){
 this.route.navigate(['/home'],{queryParams:{data:this.name}})
}
}
