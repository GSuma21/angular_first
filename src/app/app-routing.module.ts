import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { DisplayuserComponent } from './admin/displayuser/displayuser.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'adduser', component: AdduserComponent },
      { path: 'displayuser', component: DisplayuserComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
