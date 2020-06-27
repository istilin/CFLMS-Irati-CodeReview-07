import { Component, OnInit } from '@angular/core';

import { trips } from '../trips';

@Component({
  selector: 'trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips = trips;

  constructor() { }

  ngOnInit(): void {
  }

}
