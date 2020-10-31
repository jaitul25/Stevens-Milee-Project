import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
//import { UserFormComponent } from './user-form/user-form.component';
import {CourseListComponent} from './course-list/course-list.component'; 

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  //{ path: 'adduser', component: UserFormComponent }
  { path: 'courses', component:CourseListComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }