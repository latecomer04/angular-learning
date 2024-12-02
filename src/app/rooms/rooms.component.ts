import { Component, OnInit , NgModule} from '@angular/core';
import { Room } from './room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  noOfRooms = 10;
  hideRooms : boolean = false;
  rooms : Room = {
    totalRooms:20,
    availableRooms: 0,
    bookedRooms: 10
  }

  constructor(){}
  
  toggle(){
    this.hideRooms=!this.hideRooms;
  }
  ngOnInit(): void {}
}
