import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any>= new EventEmitter()
  @Output() toggleSideBarForMeRight: EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();

  }
  toggleSideBarRight(){
    this.toggleSideBarForMeRight.emit();
  }


}
