import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  /* ---------- Declare vars ---------- */
  house;
  characters = null;
  today = new Date();
  year = this.today.getFullYear();
  houses: any[] = [
    {name: 'Visitar todas'},
    {name: 'Gryffindor'},
    {name: 'Hufflepuff'},
    {name: 'Ravenclaw'},
    {name: 'Slytherin'}
  ];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  /* ---------- Select house function  ---------- */
  selectHouse(value){
    this.house = value;
    this.loadData();
  }

  /* ---------- Load data function  ---------- */
  loadData(){
    if (this.house === 'Visitar todas') {
      this.appService.getCharacters().subscribe((response) => {
        this.characters = response;
      })
    }else{
      this.appService.getHouse(this.house).subscribe((response) => {
        this.characters = response;
      })
    } 
  }
}
