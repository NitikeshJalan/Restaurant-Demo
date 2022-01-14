import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared services/shared.service';
import { RestaurantDetailsService } from './restaurant-details.service';

@Component({
  selector: 'app-restaurant-details-wrapper',
  templateUrl: './restaurant-details-wrapper.component.html',
  styleUrls: ['./restaurant-details-wrapper.component.scss']
})
export class RestaurantDetailsWrapperComponent implements OnInit {
  type = 'Menu';
  filterName = 'All';
  selectedRestaurant: any;
  selectedRestaurantId: any;
  allMenus: any;
  filterItems: any = [];
  allFilteredMenu: any;
  counts: any = { 'All': null };
  details: any = [];
  restaurants: any = [];
  showDetailsLoader = true;

  constructor(private sharedService: SharedDataService, private restDetailsService: RestaurantDetailsService, private route: ActivatedRoute) {
    this.sharedService.currentMessage.subscribe(message => (this.selectedRestaurantId = message[0].id));

    this.restDetailsService.getRestaurantData().subscribe(data => {
      this.restaurants = data;
      if (this.details.length > 0 && this.restaurants.length > 0) {
        this.checkdetails();
      }
    });

    this.restDetailsService.getAllMenuData().subscribe(data => {
      this.details = data;
      if (this.details.length > 0 && this.restaurants.length > 0) {
        this.checkdetails();
      }
    });
  }

  ngOnInit(): void {
  }

  checkdetails() {
    if (!this.selectedRestaurantId) {
      this.selectedRestaurantId = this.route.snapshot.params['id'];
    }
    this.selectedRestaurant = this.restaurants.filter((element: any) => element.id == this.selectedRestaurantId);
    this.selectedRestaurant = this.selectedRestaurant[0];
    this.allMenus = this.details.filter((element: any) => {
      return element.restaurantName.includes(this.selectedRestaurant.restaurantName);
    });
    this.allFilteredMenu = [...this.allMenus];
    this.allMenus.forEach((element: any) => {
      var store = JSON.parse(element.itemCategory);
      store.forEach((element: any) => {
        this.filterItems.push(element);
      });
    });
    this.filterItems.forEach((x: any) => {
      this.counts[x] = (this.counts[x] || 0) + 1;
    });
    this.showDetailsLoader = false;
  }

  filterMenu(filterName: any) {
    this.filterName = filterName;
    if (filterName == 'All') {
      this.allMenus = [...this.allFilteredMenu];
    } else {
      this.allMenus = this.allFilteredMenu.filter((element: any) => {
        return element.itemCategory.includes(filterName);
      });
    }

  }
}
