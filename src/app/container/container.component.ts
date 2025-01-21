import { Component } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [RoomsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
