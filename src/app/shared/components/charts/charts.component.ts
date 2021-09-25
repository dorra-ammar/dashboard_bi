import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {Chart} from "../../models/chart";
import {MessageService} from "../../services/message.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() targetJson :any = {};
  @Output() edit = new EventEmitter<string>();
  @Output() chartsList = new EventEmitter<Chart[]>();
  @Output() remove = new EventEmitter<string>();
  public chartOptions : ChartOptions = {};
  public chartLabels : Label[] = [];
  public chartType : ChartType = 'line';
  public chartLegend : boolean = true;
  public chartData : ChartDataSets[] = [];
  public chartDimension : any = [];

  constructor(private messageService: MessageService, private dataService: DataService) { }

  ngOnInit(): void {
    this.chartOptions = this.targetJson.optionsList
    this.chartLabels = this.targetJson.labelList;
    this.chartType = this.targetJson.chartType;
    this.chartLegend = this.targetJson.legend;
    this.chartData = this.targetJson.dataList;
    this.chartDimension = this.targetJson.dimension;

  }
  // sendChart(chartToRemove: Chart){
  //   this.messageService.changeMessage(chartToRemove);
  // }
  removeChart(){
    this.remove.emit();
  }

  modifChart(){
    this.edit.emit();
    this.chartsList.emit();
  }
}
