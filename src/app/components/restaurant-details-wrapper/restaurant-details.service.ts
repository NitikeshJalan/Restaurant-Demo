import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {

  public restaurantData = new BehaviorSubject<[]>([]);
  public allMenuData = new BehaviorSubject<[]>([]);

  constructor(public http: HttpClient) { }

  restaurantDetails_url: string =
    "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";

  allMenu_url: string =
    "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu";

  getRestaurantDetails(): Observable<any> {
    return this.http.get<[]>(this.restaurantDetails_url);
  }

  getAllMenu(): Observable<any> {
    return this.http.get<[]>(this.allMenu_url);
  }

  setRestaurantData(type: any) {
    this.restaurantData.next(type);
  }

  getRestaurantData() {
    return this.restaurantData.asObservable();
  }

  setAllMenuData(type: any) {
    this.allMenuData.next(type);
  }

  getAllMenuData() {
    return this.allMenuData.asObservable();
  }
}




