import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { trips } from '../trips';

@Component({
  selector: 'trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

addToCart(trip) {
   window.alert('Your trip has been added to the cart!');
   this.cartService.addToCart(trip);
   console.log(this.cartService)
 }

  ngOnInit(){
  	this.route.paramMap.subscribe(params => {
    this.trip = trips[+params.get('tripId')];
    });
  }
}
