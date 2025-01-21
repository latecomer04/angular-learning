import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { RoomList } from '../rooms/room';

@Component({
  selector: 'hinv-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class RoomListComponent implements OnInit {
  
  @Input() rooms:RoomList[]=[];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  @Input() title: string = "";

  ngOnInit(): void {
      
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();;
      console.log(changes['title'].currentValue.toUpperCase());
      console.log("here")
    }
    
  }
}
