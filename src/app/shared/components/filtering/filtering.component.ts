import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {DataService} from "../../services/data.service";
@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  myControl = new FormControl('');

  queryText: string = "";
  public mesures: any = [];
  filteredOptions: Observable<string[]> | undefined;
  selectedMesureStringValue = '';
  selectedMesureStringValueList = [];
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    let dimensionsAndMesures = this.dataService.getData();
    this.mesures = dimensionsAndMesures['mesures'];
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.mesures.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  addMesureToTextArea(){
    // @ts-ignore
    this.selectedMesureStringValueList.push(this.selectedMesureStringValue);
    // console.log('selectedMesureStringValueList : ', this.selectedMesureStringValueList);
    this.queryText = this.queryText + " " + this.selectedMesureStringValue;

  }
  addFilter(){
    var queryTextAfterEliminateSpace = this.queryText.replace(/\s/g, "");
    var mesureDetected ='';
    var selectedMesureQueryText: string[] = [];
    var mathSymbolList: string[] = [];
    var numberList: string[] = [];
    var logicalExpressionlist = [];
    for (let i = 0; i < queryTextAfterEliminateSpace.length; i++) {
      mesureDetected = mesureDetected+queryTextAfterEliminateSpace[i];
      for (let j= 0;j < this.selectedMesureStringValueList.length;j++){
        if (mesureDetected == this.selectedMesureStringValueList[j]){
          // @ts-ignore
          selectedMesureQueryText.push(mesureDetected);
          queryTextAfterEliminateSpace = queryTextAfterEliminateSpace.replace(mesureDetected, '');
        }
      }
    }
    var mathExpressionDetected ='';
    for (let i = 0; i < queryTextAfterEliminateSpace.length; i++) {
      mathExpressionDetected = mathExpressionDetected+queryTextAfterEliminateSpace[i];
      switch(mathExpressionDetected) {
        case "<": {
          mathSymbolList.push(mathExpressionDetected);
          queryTextAfterEliminateSpace = queryTextAfterEliminateSpace.substr(1);
          break;
        }
        case ">": {
          mathSymbolList.push(mathExpressionDetected);
          queryTextAfterEliminateSpace = queryTextAfterEliminateSpace.substr(1);
          break;
        }
        case "isnotnull": {
          mathSymbolList.push(mathExpressionDetected);
          queryTextAfterEliminateSpace = queryTextAfterEliminateSpace.replace('isnotnull', '');
          break;
        }
        case "isnull": {
          mathSymbolList.push(mathExpressionDetected);
          queryTextAfterEliminateSpace = queryTextAfterEliminateSpace.replace('isnull', '');
          break;
        }
      }
    }
    var numberDetected ='';
    for (let i = 0; i < queryTextAfterEliminateSpace.length; i++) {
      if (queryTextAfterEliminateSpace[i] in ['0','1','2','3','4','5','6','7','8','9','.']){
        numberDetected = numberDetected+queryTextAfterEliminateSpace[i];
      }
    }
    numberList.push(numberDetected);
    queryTextAfterEliminateSpace = queryTextAfterEliminateSpace.replace(numberDetected, '');
    // this.dataService.currentMessageMes.subscribe((messageData) => {
    //   var dimensionsDropped: any[] = [];
    //   var mesuresDropped: any[] = [];
    //   this.dataService.getDataFiltered(messageData[1], messageData[0],selectedMesureQueryText[0],mathSymbolList[0],numberList[0]).subscribe((result) => {
    //     this.data = result;
    //     for (let i = 0; i < this.data.length; i++) {
    //       dimensionsDropped.push([this.data[i][messageData[1]]]);
    //       mesuresDropped.push(this.data[i]['Measures']);
    //     }
    //     // let message = this.getChartBody(this.selectedChart);
    //     message.labelList = dimensionsDropped;
    //     message.dataList = [];
    //     message.dataList.push({data: mesuresDropped, label: messageData[0], yAxisID: null});
    //     message.dimension = messageData[1] ;
    //     this.messageService.changeCreateMessage(message);
    //
    //   });
    // });
    return {"mesure":selectedMesureQueryText,"mathSymbol":mathSymbolList,"number":numberList};
  }
}
