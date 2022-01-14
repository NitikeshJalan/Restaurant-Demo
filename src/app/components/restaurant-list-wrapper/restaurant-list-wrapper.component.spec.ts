import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListWrapperComponent } from './restaurant-list-wrapper.component';

describe('RestaurantListWrapperComponent', () => {
  let component: RestaurantListWrapperComponent;
  let fixture: ComponentFixture<RestaurantListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantListWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
