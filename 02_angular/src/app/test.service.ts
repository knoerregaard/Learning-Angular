import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  // bookings = [
  //   {
  //     id: 123, 
  //     data: 234
  //   },
  //   {
  //     id : 321,
  //     data : 333
  //   }
  // ]
  constructor(private http : HttpClient) { }

  //From server
  getCats(){
    return this.http.get("http://localhost:3000/cats");
  }

  postCat(cat : object){
    return this.http.post("http://localhost:3000/cats", cat)
  }
}
