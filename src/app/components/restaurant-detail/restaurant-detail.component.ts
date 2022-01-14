import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared services/shared.service';

@Component({
  selector: 'restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  @Input() selectedRestaurant: any;

  constructor() { }

  ngOnInit(): void {

  }
}
