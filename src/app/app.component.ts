import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RoomsComponent,CommonModule,ContainerComponent,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit,OnInit {
  title = 'hotelInventoryApp'
  // role = "Users";

  // @ViewChild ('user' , {read:ViewContainerRef}) vcr!:ViewContainerRef
  @ViewChild('content',{static:true}) headline!:ElementRef;

  ngOnInit(): void {
      this.headline.nativeElement.innerText="welcome to the website"
  }
  ngAfterViewInit(): void {
    // here , in this way we can render a component using viewchild and manipulate its props.
    // const containerRef = this.vcr.createComponent(RoomsComponent);
    // containerRef.instance.noOfRooms = 50;
  }

}
