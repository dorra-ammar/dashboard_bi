import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sideBarOpen = true;
  sideBarOpenRight = true ;

  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;

  }
  sideBarTogglerRight(){
    this.sideBarOpenRight= !this.sideBarOpenRight;
  }

}
