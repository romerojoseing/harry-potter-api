import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http:HttpClient) { } 
  
  /* --------- Get info characters --------- */
  getCharacters(){
    return this.http.get(environment.urlAddress + '/characters') 
  }

  /* --------- Get info students --------- */
  getStudents(){
    return this.http.get(environment.urlAddress + '/characters/students') 
  }

  /* --------- Get info staff --------- */
  getStaff(){
    return this.http.get(environment.urlAddress + '/characters/staff') 
  }

  /* --------- Get info house --------- */
  getHouse(house){
    return this.http.get(environment.urlAddress + '/characters/house/' + house) 
  }
}
