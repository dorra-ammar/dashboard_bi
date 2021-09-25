import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Chart} from "../models/chart";
import {ChartToModify} from "../models/chart-to-modify";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private createChartMessageSource = new BehaviorSubject<Chart>({});
  createChartMessage = this.createChartMessageSource.asObservable();

  // private messageSource = new BehaviorSubject<Chart>({});
  // currentMessage = this.messageSource.asObservable();

  private requestModifyChartMessageSource = new BehaviorSubject<ChartToModify>({});
  requestModifyChartMessage = this.requestModifyChartMessageSource.asObservable();

  private chartMessageAfterEditSource = new BehaviorSubject<ChartToModify>({});
  modifyChartMessage = this.chartMessageAfterEditSource.asObservable();

  // private ModifChartListMessageSource = new BehaviorSubject<Chart[]>([]);
  // ModifChartListMessage = this.ModifChartListMessageSource.asObservable();
  // private ModifChartIndexMessageSource = new BehaviorSubject<any>({});
  // ModifChartIndexMessage = this.ModifChartIndexMessageSource.asObservable();



  constructor() {
  }

  changeCreateMessage(message: Chart) {
    this.createChartMessageSource.next(message);
  }
  // changeMessage(message: Chart) {
  //   this.messageSource.next(message);
  // }
  requestModifyMessage(message: ChartToModify) {
    this.requestModifyChartMessageSource.next(message);
  }

  ModifyChartAfterEditRequestMessage(message: ChartToModify) {
    this.chartMessageAfterEditSource.next(message);
  }
  // changeModifChartListMessage(message: Chart[]) {
  //   this.ModifChartListMessageSource.next(message);
  // }
  // changeModifChartIndexMessage(message: any) {
  //   this.ModifChartIndexMessageSource.next(message);
  // }
}
