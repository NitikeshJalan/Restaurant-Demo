import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantListService {

  public allRestData = new BehaviorSubject<[]>([]);

  constructor(public http: HttpClient) { }

  albums_url: string =
    "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";

  getAllRestaurants(): Observable<any> {
    return this.http.get<[]>(this.albums_url)
  }

  setAllRestData(type: any) {
    this.allRestData.next(type);
  }

  getAllRestData() {
    return this.allRestData.asObservable();
  }
}