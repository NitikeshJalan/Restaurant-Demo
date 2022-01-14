import { Component, OnInit } from '@angular/core';
import { RestaurantDetailsService } from '../restaurant-details-wrapper/restaurant-details.service';
import { RestaurantListService } from '../restaurant-list-wrapper/restaurant-list.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private restDetailsService: RestaurantDetailsService, private restListService: RestaurantListService) {
    this.restDetailsService.getRestaurantDetails().subscribe({
      next: data => {
        this.restDetailsService.setRestaurantData(data.restaurantDetails);
      }
    });
    this.restDetailsService.getAllMenu().subscribe({
      next: data => {
        this.restDetailsService.setAllMenuData(data.menu);
      }
    });
    this.restListService.getAllRestaurants().subscribe({
      next: data => {
        this.restListService.setAllRestData(data.allRestaurants);
      }
    });
  }

  ngOnInit(): void {

  }

}
