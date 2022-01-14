import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestaurantDetailsWrapperComponent } from './components/restaurant-details-wrapper/restaurant-details-wrapper.component';
import { RestaurantListWrapperComponent } from './components/restaurant-list-wrapper/restaurant-list-wrapper.component';
import { CommonMenuComponent } from './components/common-menu/common-menu.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SharedDataService } from './shared services/shared.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { RestaurantListService } from './components/restaurant-list-wrapper/restaurant-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    PageNotFoundComponent,
    RestaurantListWrapperComponent,
    RestaurantDetailsWrapperComponent,
    CommonMenuComponent,
    RestaurantDetailComponent,
    TopBarComponent,
    SearchFilterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: RestaurantListWrapperComponent },
      { path: 'rest-details/:id', component: RestaurantDetailsWrapperComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [SharedDataService, RestaurantListService],
  bootstrap: [DashboardComponent],
})
export class AppModule { }
