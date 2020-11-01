//declare var Ext: any;
import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {CourseService} from '../course-service.service';
//import colors from '' ;
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  //isPhone:boolean = Ext.os.is.Phone;
  //colors:object = colors; 
  //rightResizable = {split: true,  edges: 'west'};

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.findAll().subscribe(data => {
      this.courses = data;
    });
  }
}
