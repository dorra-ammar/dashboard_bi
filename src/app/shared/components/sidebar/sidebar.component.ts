import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() dropForMe: EventEmitter<any> = new EventEmitter()
  data: any;
  public jsonToPrint: any;
  public dimensions: any = [];
  public mesures: any = [];

  drop2(event: any) {
    this.dropForMe.emit();
  }


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    let dimensionsAndMesures = this.dataService.getData();
    this.dimensions = dimensionsAndMesures['dimensions'];
    this.mesures = dimensionsAndMesures['mesures'];

  }
}
