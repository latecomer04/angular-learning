import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms/room';

@Component({
  selector: 'hinv-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss' 
})

export class RoomListComponent implements OnInit {

  @Input() rooms:RoomList[]=[];

  ngOnInit(): void {
      
  }
}
