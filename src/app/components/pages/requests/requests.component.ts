import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  /* ---------- Declare vars ---------- */
  requests = null;
  today = new Date();
  year = this.today.getFullYear();

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  /* ---------- Load data function  ---------- */
  loadData(){
    this.requests = JSON.parse(localStorage.getItem('Solicitudes'));
  }

}
