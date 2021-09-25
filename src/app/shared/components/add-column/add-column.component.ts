import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {DataService} from "../../services/data.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit, OnChanges {
  message: boolean = false ;
  @Input() dimension : string[] = [];
  @Input() mesure : string[] = [];
  @Output() messageEvent = new EventEmitter<boolean>();
  @Output() mesureEdited = new EventEmitter<string>();
  @Output() dimensionEdited = new EventEmitter<string>();


  public doneMesure: any[] = this.mesure;
  public doneDimension: any[] = this.dimension;
  public data: any;

  constructor(private messageService: DataService, private modifMessage: MessageService) {
  }

  ngOnInit(): void {
    // this.modifMessage.requestModifyChartMessage.subscribe((messageFromChart) => {
    //   console.log("messageFromChart => ",messageFromChart);
    //   // @ts-ignore
    //   if(messageFromChart?.chart?.dataList!=undefined){
    //     this.doneMesure.pop();
    //     this.doneDimension.pop();
    //     // @ts-ignore
    //     this.doneMesure.push( messageFromChart?.chart.dataList[0].label);
    //     // @ts-ignore
    //     this.doneDimension.push(messageFromChart?.chart.dimension);
    //     this.messageEvent.emit(this.message);
    //     console.log("new mesure : ",this.doneMesure);
    //     console.log("new dimension : ",this.doneDimension);
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.mesure && changes.mesure.currentValue != ""){
      this.doneMesure = changes.mesure.currentValue;
    }
    if(changes.dimension && changes.dimension.currentValue != ""){
      this.doneDimension = changes.dimension.currentValue;
    }
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('this.doneDimension : ',this.doneDimension);
      if(this.doneDimension[0]){
        this.dimensionEdited.emit(this.doneDimension[0]);
      }
      if(this.doneMesure[0]){
        this.mesureEdited.emit(this.doneMesure[0]);
      }
      this.messageService.changeMessageMes(this.doneMesure.concat(this.doneDimension));
    }
  }

  removeMesure(index:any) {
    // @ts-ignore
    this.doneMesure.splice(index, 1);
    console.log('this.doneMesure : ',this.doneMesure);
    this.mesureEdited.emit("");
    this.messageService.changeMessageMes(this.doneMesure.concat(this.doneDimension));
  }
  removeDimension(index:any) {
    // @ts-ignore
    this.doneDimension.splice(index, 1);
    this.dimensionEdited.emit("");
    this.messageService.changeMessageMes(this.doneMesure.concat(this.doneDimension));
  }
  createNewChart(){
    this.doneMesure =[];
    this.doneDimension = [];
    this.messageService.changeMessageMes(this.doneMesure.concat(this.doneDimension));

  }
}
