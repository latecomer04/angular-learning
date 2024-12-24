import { Component, OnInit , NgModule} from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule, JsonPipe } from '@angular/common';
import { RoomListComponent } from '../room-list/room-list.component';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule,RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  noOfRooms = 10;
  hideRooms : boolean = false;
  rooms : Room = {
    totalRooms:20,
    availableRooms: 1,
    bookedRooms: 10
  }

  roomList:RoomList[] =[]

  constructor(){}
  
  toggle(){
    this.hideRooms=!this.hideRooms;
  }
  selectedRoom:RoomList | undefined;
  
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber:1,
        roomType:"Deluxe",
        amenities:"Heater,BathTub",
        price:10000,
        photos:"https://unsplash.com/photos/gray-bedsprea-w72a24brINI",
        checkinTime: new Date('12-Nov-2024'),
        checkoutTime: new Date('15-nov-2024'),
        rating: 4.45
      },
      {
        roomNumber:2,
        roomType:"Super-Deluxe",
        amenities:"Heater,BathTub,Private Bar",
        price:15000,
        photos:"https://unsplash.com/photos/gray-bedsprea-w72a24brINI",
        checkinTime: new Date('14-Nov-2024'),
        checkoutTime: new Date('16-nov-2024'),
        rating: 3.9
      },
      {
        roomNumber:3,
        roomType:"Suite",
        amenities:"Heater,BathTub,Private Bar,Private Pool",
        price:20000,
        photos:"https://unsplash.com/photos/gray-bedsprea-w72a24brINI",
        checkinTime: new Date('12-Nov-2024'),
        checkoutTime: new Date('15-nov-2024'),
        rating:4
      }  
    ]
  }

  selectRoom(room:RoomList){
    this.selectedRoom=room;
  }
}
