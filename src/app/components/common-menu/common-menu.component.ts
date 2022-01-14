import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared services/shared.service';

@Component({
  selector: 'common-menu',
  templateUrl: './common-menu.component.html',
  styleUrls: ['./common-menu.component.scss']
})
export class CommonMenuComponent implements OnInit {

  @Input() type: any;
  @Input() details: any;


  selectedRestaurant: any;


  constructor(private router: Router, private sharedService: SharedDataService) { }

  ngOnInit(): void {
    console.log();
  }

  openRestaurantDetails(id: number) {
    this.selectedRestaurant = this.details.filter((element: any) => element.id == id);
    this.sharedService.changeData(this.selectedRestaurant);
    this.router.navigate(['/rest-details/' + id]);
  }
}
