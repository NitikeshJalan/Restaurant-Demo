import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsWrapperComponent } from './restaurant-details-wrapper.component';

describe('RestaurantDetailsWrapperComponent', () => {
  let component: RestaurantDetailsWrapperComponent;
  let fixture: ComponentFixture<RestaurantDetailsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDetailsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
