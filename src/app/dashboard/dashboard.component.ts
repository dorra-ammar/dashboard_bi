import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MessageService} from "../shared/services/message.service";
import {Chart} from "../shared/models/chart";
import {DataService} from "../shared/services/data.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartToDraw: Chart[] = [];

  constructor(private messageService: MessageService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.messageService.createChartMessage.subscribe((message) => {
      if (message.dataList?.length) {
        this.chartToDraw = [...this.chartToDraw, message];
        this.requestEditChart(this.chartToDraw.length-1);
      }
    });

    this.messageService.modifyChartMessage.subscribe((chartToModify)=>{
      // @ts-ignore
      this.chartToDraw[chartToModify.index]=chartToModify.chart;
      console.log(this.chartToDraw);
    })
  }

  public trackItem (index: number, item: Chart) {
    // @ts-ignore
    return   item?.dataList[0].label + "-" + item?.dimension+ "-" + index;
  }

  dropChart(index:any){
    console.log('this.chartToDraw[index]',this.chartToDraw[index]);
    // @ts-ignore
    this.chartToDraw.splice(index, 1);
  }

  requestEditChart(index:any){
    this.messageService.requestModifyMessage({chart : this.chartToDraw[index],index:index});
    console.log(index);
  }

}
