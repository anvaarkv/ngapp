import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "Couses App";
  newcomponent = "Entered in new component created";
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  date: string = new Date().toDateString();
  time: string = new Date().toLocaleTimeString();
  datetime: string;
  constructor() {
    setInterval(()=> {
      let currentdate = new Date();
      this.datetime = currentdate.toDateString() + " " + currentdate.toLocaleTimeString();
    
    },1000);
    }

  ngOnInit() {
  }

}
