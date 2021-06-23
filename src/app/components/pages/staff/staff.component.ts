import { Component, OnInit } from '@angular/core';

import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff = null;

  today = new Date();
  year = this.today.getFullYear();

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.appService.getStaff().subscribe((response) => {
      this.staff = response;
    })
  }
}