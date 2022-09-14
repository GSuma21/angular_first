import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  // list:any[]=[]
  // getValues(name:string){
   
  //   this.list.push({id:this.list.length,name:name})
  //   console.warn(this.list)
  // }

  onAddUser(data:string){
    this.http.post('https://6319c7ae8e51a64d2bec2489.mockapi.io/api/adduser',data)
    .subscribe((res)=>{
      console.warn("res" ,res)
    })
    console.warn(data)

  }
}
