import { Component, OnInit } from '@angular/core';

import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.appService.getCharacters().subscribe((response) => {
      console.log(response);
    })

    this.appService.getStudents().subscribe((response) => {
      console.log(response);
    })

    this.appService.getStaff().subscribe((response) => {
      console.log(response);
    })

    this.appService.getHouse('Gryffindor').subscribe((response) => {
      console.log(response);
    })
  }
}
