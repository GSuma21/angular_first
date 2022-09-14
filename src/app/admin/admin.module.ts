import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DisplayuserComponent } from './displayuser/displayuser.component'




@NgModule({
  declarations: [
    AdduserComponent,
    AdminComponent,
    DisplayuserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

   
  ],
  exports:[
    AdduserComponent,
    AdminComponent
  ]
})
export class AdminModule { }
