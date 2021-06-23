import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http:HttpClient) { } 
  
  getCharacters(){
    return this.http.get(environment.urlAddress + '/characters') 
  }

  getStudents(){
    return this.http.get(environment.urlAddress + '/characters/students') 
  }

  getStaff(){
    return this.http.get(environment.urlAddress + '/characters/staff') 
  }

  getHouse(house){
    return this.http.get(environment.urlAddress + '/characters/house/' + house) 
  }
}
