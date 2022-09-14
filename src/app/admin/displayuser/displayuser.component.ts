import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {
 users:any;
  constructor(private userData:UserDataService) { 
    userData.users().subscribe((data)=>{
  this.users = data;
  console.warn(this.users)
    })

    
  }

  ngOnInit(): void {
  }

}
