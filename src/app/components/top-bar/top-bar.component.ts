import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared services/shared.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() type: any;
  @Input() set filterCount(value: any) {
    if (value >= 0) {
      this.count = value;
    }
  }
  searchValue: any;
  count = 0;
  @Output() searchValueEmit: any = new EventEmitter();
  @Output() openSearchFilterEmit: any = new EventEmitter();

  constructor(private router: Router, private sharedService: SharedDataService) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  searchRestaurants() {
    this.searchValueEmit.emit(this.searchValue);
  }

  openSearchFilter() {
    this.openSearchFilterEmit.emit(true);
  }
}
