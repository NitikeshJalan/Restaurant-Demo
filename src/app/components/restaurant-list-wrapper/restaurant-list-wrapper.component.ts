import { Component, NgZone, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared services/shared.service';
import { RestaurantListService } from './restaurant-list.service';

@Component({
  selector: 'app-restaurant-list-wrapper',
  templateUrl: './restaurant-list-wrapper.component.html',
  styleUrls: ['./restaurant-list-wrapper.component.scss']
})
export class RestaurantListWrapperComponent implements OnInit {

  type = 'Restaurants';
  selectedRestaurant: any;
  allRestaurants: any;
  filterFlag = false;
  searchFilterFlag = false;
  showListLoader = true;
  searchFilterApplied = false;
  filterCount: any;

  itemFilters = ['Baked', 'Sweet', 'Hot Dish', 'Fast Food', 'Salads'];
  details: any = [];

  constructor(private restService: RestaurantListService, private ngZone: NgZone) {

    this.restService.getAllRestData().subscribe(data => {
      this.details = data;
      if (this.details.length > 0) {
        this.allRestaurants = [...this.details];
        this.showListLoader = false;
      }
    });
  }

  ngOnInit(): void {
  }

  selectRestFilter(filterName: any) {
    this.filterFlag = true;
    if (this.searchFilterApplied) {
      this.allRestaurants = this.allRestaurants.filter((element: any) => {
        return element.restaurantCategory.includes(filterName);
      });
    } else {
      this.allRestaurants = this.details.filter((element: any) => {
        return element.restaurantCategory.includes(filterName);
      });
    }
  }

  selectAllBtn() {
    this.allRestaurants = [...this.details];
  }

  searchRestaurant(event: any) {
    if (event.trim().length > 0) {
      this.allRestaurants = this.details.filter((element: any) => {
        return element.restaurantName.toLowerCase().includes(event.toLowerCase());
      });
    } else {
      this.allRestaurants = [...this.details];
    }
  }

  sortByRestaurant(event: any) {
    if (event) {
      this.allRestaurants.sort(function (a: any, b: any) {
        return b.isOpen - a.isOpen;
      });
    }
  }

  filterByAll(event: any) {
    if (this.filterFlag) {
      this.allRestaurants = [...this.allRestaurants];
    } else {
      this.allRestaurants = [...this.details];
    }
  }

  filterByOptions(event: any) {
    this.searchFilterApplied = true;
    if (event.length > 0) {
      this.allRestaurants = this.allRestaurants.filter((element: any) => {
        return event.find((item: any) => {
          return element.restaurantCuisine.includes(item);
        });
      });
    }
  }

  openSearchFilter(event: any) {
    this.searchFilterFlag = event;
    this.ngZone.run(() => { });
  }

  closeSearchFilter(event: any) {
    this.searchFilterFlag = event;
  }

  searchFilterCount(event: any) {
    this.filterCount = event;
  }
}
