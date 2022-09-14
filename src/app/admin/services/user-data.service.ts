import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get('https://6319c7ae8e51a64d2bec2489.mockapi.io/api/adduser')
  }
}
