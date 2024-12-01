import { Component, OnInit } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  noOfRooms = 10;
  hideRooms : boolean = false;
  rooms : Room = {
    totalRooms:20,
    availableRooms: 5,
    bookedRooms: 10
  }

  constructor(){}
  
  toggle(){
    this.hideRooms=!this.hideRooms;
  }
  ngOnInit(): void {}
}
