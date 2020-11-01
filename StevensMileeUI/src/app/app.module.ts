import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-service.service';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseService } from './course-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CourseListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
