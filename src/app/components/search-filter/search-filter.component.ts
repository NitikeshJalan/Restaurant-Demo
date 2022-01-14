import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  isSelected = false;
  isallSelected = true;
  flag = false;
  @Input() set searchFilterFlag(value: any) {
    if (value) {
      this.flag = value;
    }
  }
  @Output() sortByEmit = new EventEmitter();
  @Output() allSelectedEmit = new EventEmitter();
  @Output() filterOptionsEmit = new EventEmitter();
  @Output() closeEventEmit = new EventEmitter();
  @Output() searchFilterCountEmit = new EventEmitter();

  filterItems = [
    { name: 'Fast Food', ischeck: false },
    { name: 'American Food', ischeck: false },
    { name: 'Pizza', ischeck: false },
    { name: 'Asian', ischeck: false },
    { name: 'Desert', ischeck: false },
    { name: 'Mexican', ischeck: false },
    { name: 'Breakfast', ischeck: false },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  closeSearchFilter() {
    this.flag = false;
    this.closeEventEmit.emit(false);
  }

  selectSortBy() {
    this.isSelected = !this.isSelected;
  }

  selectCuisine(item: any) {
    item.ischeck = !item.ischeck;
    this.isallSelected = this.filterItems.every(function (item: any) {
      return item.ischeck == true;
    });
    if (this.isallSelected) {
      this.filterItems.forEach((element: any) => {
        element.ischeck = false;
      });
    }
  }

  selectAll() {
    this.isallSelected = !this.isallSelected;
    if (this.isallSelected) {
      this.filterItems.forEach((element: any) => {
        element.ischeck = false;
      });
    }
  }

  applyFilters() {
    let filterOptions: any = [];
    let count = 0;
    if (this.isallSelected) {
      this.allSelectedEmit.emit(this.isallSelected);
      count = 0;
    } else {
      this.filterItems.forEach((element: any) => {
        if (element.ischeck) {
          count++;
          filterOptions.push(element.name);
        }
      });
      this.filterOptionsEmit.emit(filterOptions);
    }
    if (this.isSelected) {
      this.sortByEmit.emit(this.isSelected);
      count++;
    }
    this.searchFilterCountEmit.emit(count);
    this.flag = false;
    this.closeEventEmit.emit(false);
  }
}
