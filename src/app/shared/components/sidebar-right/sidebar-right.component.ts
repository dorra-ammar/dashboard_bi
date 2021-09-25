import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MessageService} from "../../services/message.service";
import {Chart} from "../../models/chart";
import {DataService} from "../../services/data.service";
import { AddColumnComponent } from '../add-column/add-column.component';
import {getAttrsForDirectiveMatching} from "@angular/compiler/src/render3/view/util";
import {ChartToModify} from "../../models/chart-to-modify";
import {FilteringComponent} from "../filtering/filtering.component";

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {

  @ViewChild(AddColumnComponent) addColumn: any ;
  @ViewChild(FilteringComponent) filteringComponent: any ;

  public selectedChart: string = "bar chart";
  disgnComponent = false;
  addComponent = true;
  filterComponent = false;
  public bar = false;
  data: any;
  public bool: boolean = true;
  public update: boolean = false ;
  public toolsList: any[] = [
    {icon: "insert_chart_outlined", name: "insert_chart_outlined"},
    {icon: "format_paint", name: "format_paint"},
    {icon: "filter_frames", name: "filter_frames"}
  ];
  public selectedTool: string = "insert_chart_outlined";
  public mesure: string[] = [];
  public dimension: string[] = [];
  public chartToModify: ChartToModify = {};


  public chartsList: any = [
    {
      id: 1,
      chart: {
        labelList: [['2006'], ['2007'], ['2008'], ['2009'], ['2010'], ['2011'], ['2012']],
        dataList: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', yAxisID: null},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', yAxisID: null}
        ],
        chartType: "bar",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {xAxes: [{}], yAxes: [{}]},
        }
      },
      icon: "align_vertical_bottom",
      name: "bar chart"
    },
    {
      id: 2,
      chart: {
        labelList: [['2006'], ['2007'], ['2008'], ['2009'], ['2010'], ['2011'], ['2012']],
        dataList: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', yAxisID: null},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Profit', yAxisID: null}
        ],
        chartType: "horizontalBar",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {
            xAxes: [], yAxes: []
          }
        }
      },
      icon: "align_horizontal_left",
      name: "horizontal bar chart"
    },
    {
      id: 3,
      chart: {
        labelList: [['January'], ['February'], ['March'], ['April'], ['May'], ['June'], ['July']],
        dataList: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', yAxisID: 'y-axis-0'},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', yAxisID: 'y-axis-0'},
          {data: [180, 480, 770, 90, 1000, 270, 400], "label": 'Series C', yAxisID: 'y-axis-1'}
        ],
        chartType: "line",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {
            xAxes: [{}],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left',
              },
              {
                id: 'y-axis-1',
                position: 'right',
              }
            ]
          }
        }
      },
      icon: "line_axis",
      name: "line chart"


    },
    {
      id: 4,
      chart: {
        labelList: [['Sales 01'], ['Sales 02'], ['Sales 03'], ['Sales 04']],
        dataList: [
          {data: [120, 150, 180, 90], label: null, yAxisID: null},
        ],
        chartType: "doughnut",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {xAxes: [], yAxes: []},
        }
      },
      icon: "donut_large",
      name: "doughnut chart"
    },
    {
      id: 5,
      chart: {
        labelList: [['Download', 'Sales'], ['In', 'Store', 'Sales'], ['Mail Sales']],
        dataList: [
          {data: [300, 500, 100], label: null, yAxisID: null},
        ],
        chartType: "pie",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {xAxes: [], yAxes: []},
        }
      },
      icon: "pie_chart",
      name: "pie chart"
    },
    {
      id: 6,
      chart: {
        labelList: [['Download Sales'], ['In-Store Sales'], ['Mail Sales'], ['Telesales'], ['Corporate Sales']],
        dataList: [
          {data: [300, 500, 100, 40, 120], label: null, yAxisID: null},
        ],
        chartType: "polarArea",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {xAxes: [], yAxes: []},
        }
      },
      icon: "area_chart",
      name: "polar area chart"

    },
    {
      id: 7,
      chart: {
        labelList: [['Eating'], ['Drinking'], ['Sleeping'], ['Designing'], ['Coding'], ['Cycling'], ['Running']],
        dataList: [
          {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', yAxisID: null},
          {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', yAxisID: null}
        ],
        chartType: "radar",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {xAxes: [], yAxes: []},
        }
      },
      icon: "radar",
      name: "radar chart"
    },
    {
      id: 8,
      chart: {
        labelList: [['2006'], ['2007'], ['2008'], ['2009'], ['2010'], ['2011'], ['2012']],
        dataList: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', yAxisID: null},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Profit', yAxisID: null},
          {data: [50, 98, 86, 21, 12, 5, 56], label: 'Series B', yAxisID: null}
        ],
        chartType: "bar",
        legend: "true",
        optionsList: {
          responsive: true,
          scales: {
            xAxes: [{stacked: true}], yAxes: [{
              stacked: true,
            }]
          },
        }
      },
      icon: "stacked_bar_chart",
      name: "stacked bar chart"
    }
  ]

  constructor(private messageService: MessageService, private dataService: DataService) {
  }


  ngOnInit(): void {
    this.dataService.currentMessageMes.subscribe((messageData) => {
      this.bool = messageData[0] == undefined || messageData[1] == undefined || this.selectedChart == "";
    });

    this.messageService.requestModifyChartMessage.subscribe((chartToModify) => {
      console.log("chartToModify : ",chartToModify)
      if(chartToModify.chart!=undefined){
        this.update=true;
        this.chartToModify= chartToModify;
        // @ts-ignore
        this.mesure = [chartToModify?.chart?.dataList[0].label];
        // @ts-ignore
        this.dimension = [chartToModify?.chart?.dimension];
      }
    });
  }

  addComlunm(e: any) {
    switch (e) {
      case "insert_chart_outlined" : {
        this.addComponent = true;
        this.disgnComponent = false;
        this.filterComponent = false ;
        this.selectedTool = "insert_chart_outlined";
        break;
      }
      case "format_paint" : {
        console.log("this.mesure  ",this.mesure);
        this.disgnComponent = true;
        this.addComponent = false;
        this.filterComponent = false ;
        this.selectedTool = "format_paint";
        break;
      }
      case "filter_frames" : {
        this.filterComponent = true ;
        this.addComponent = false;
        this.disgnComponent = false;
        this.selectedTool = "filter_frames";
        break ;
      }
    }
  }
  // @ts-ignore
  isFormValid(): boolean {
    this.dataService.currentMessageMes.subscribe((messageData) => {
      this.bool = messageData[0] == undefined || messageData[1] == undefined || this.selectedChart == "";
    });
  }
  drawChart() {
    var subscription = this.dataService.currentMessageMes.subscribe((messageData) => {
      var dimensionsDropped: any[] = [];
      var mesuresDropped: any[] = [];
      this.dataService.getDroppedColumn(messageData[0], messageData[1]).subscribe((result) => {
        this.data = result;
        for (let i = 0; i < this.data.length; i++) {
          dimensionsDropped.push([this.data[i][messageData[1]]]);
          mesuresDropped.push(this.data[i]['Measures']);
        }
        let message = this.getChartBody(this.selectedChart);
        message.labelList = dimensionsDropped;
        message.dataList = [];
        message.dataList.push({data: mesuresDropped, label: messageData[0], yAxisID: null});
        message.dimension = messageData[1] ;
        this.messageService.changeCreateMessage(message);
      })
    });
    subscription.unsubscribe();
    this.update = true ;
  }
  updateChart(){
    var subscription =this.dataService.currentMessageMes.subscribe((messageData) => {
        var dimensionsDropped: any[] = [];
        var mesuresDropped: any[] = [];
        this.dataService.getDroppedColumn(messageData[0], messageData[1]).subscribe((result) => {
          this.data = result;
          for (let i = 0; i < this.data.length; i++) {
            dimensionsDropped.push([this.data[i][messageData[1]]]);
            mesuresDropped.push(this.data[i]['Measures']);
          }
        });
        // @ts-ignore
        this.chartToModify.chart.labelList = dimensionsDropped;
        // @ts-ignore
        this.chartToModify.chart.dataList = [];
        // @ts-ignore
        this.chartToModify.chart.dataList.push({data: mesuresDropped, label: messageData[0], yAxisID: null});
        // @ts-ignore
        this.chartToModify.chart.dimension = messageData[1] ;
        console.log("this.chartToModify.chart => ",this.chartToModify.chart)
        this.messageService.ModifyChartAfterEditRequestMessage(this.chartToModify);
      subscription.unsubscribe();


    });
  }
  drawChartAfterFilter(){
    let dataAfterFilter = this.filteringComponent.addFilter();
    var mesure = dataAfterFilter['mesure'];
    var mathSymbol = dataAfterFilter['mathSymbol'];
    var number = dataAfterFilter['number'];
    this.dataService.currentMessageMes.subscribe((messageData) => {
      var dimensionsDropped: any[] = [];
      var mesuresDropped: any[] = [];
      this.dataService.getDataFiltered(messageData[1], messageData[0],mesure[0],mathSymbol[0],number[0]).subscribe((result) => {
        this.data = result;
        for (let i = 0; i < this.data.length; i++) {
          dimensionsDropped.push([this.data[i][messageData[1]]]);
          mesuresDropped.push(this.data[i]['Measures']);
        }
        let message = this.getChartBody(this.selectedChart);
        message.labelList = dimensionsDropped;
        message.dataList = [];
        message.dataList.push({data: mesuresDropped, label: messageData[0], yAxisID: null});
        message.dimension = messageData[1] ;
        this.messageService.changeCreateMessage(message);

      });
    });

  }

  selectChart(chartIconName: string) {
    this.selectedChart = chartIconName;
    this.isFormValid();
  }

  getChartBody(chartIconName: string): any {
    for (let i = 0; i < this.chartsList.length; i++) {
      if (this.chartsList[i]['name'] == chartIconName) {
        return {...this.chartsList[i]['chart']};
      }
    }
  }

  createNewChart(){
    this.update=false;
    this.selectedChart = "bar chart";
    this.selectedTool= "insert_chart_outlined";
    this.disgnComponent = false;
    this.addComponent = true;
    if(this.addColumn?.doneMesure != undefined || this.addColumn?.doneMesure != undefined){
      this.addColumn.createNewChart();
    }
  }
  // modifyChart(){
  //   this.messageService.requestModifyChartMessage.subscribe((messageFromChart) => {
  //     // @ts-ignore
  //     if (messageFromChart.chart.dataList?.length!=undefined){
  //       console.log('messageFromChart',messageFromChart);
  //       messageFromChart.chart.labelList = [];
  //       messageFromChart.chart.dataList = [];
  //       // @ts-ignore
  //       messageFromChart.dataList.push({data: [], label: "", yAxisID: null});
  //       this.messageService.changeCreateMessage(messageFromChart.chart);
  //     }
  //   });
  // }
  editMesure(event: any) {
    this.mesure = [event];
  }

  editDimension(event: any) {
    this.dimension= [event];
  }
}
