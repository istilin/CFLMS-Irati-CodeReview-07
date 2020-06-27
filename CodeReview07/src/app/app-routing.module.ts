import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
	{
        path: "", component: HomeComponent
	},{
        path: "trip-list", component: TripListComponent
	},{
        path: 'trips/:tripId', component: TripDetailsComponent
    },{
        path: 'cart', component: CartComponent
    },{
        path: 'blog', component: BlogComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
