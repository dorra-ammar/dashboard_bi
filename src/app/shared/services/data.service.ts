import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Chart} from "../models/chart";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL = "http://backend-iot.pmc.tn/api/ping/UnigesBI_Columns";
  private messageSourceMes = new BehaviorSubject<any>([]);
  currentMessageMes = this.messageSourceMes.asObservable();

  constructor(private http: HttpClient) {
  }

  getData(){
    let mesures: string[] = [];
    let dimensions: string[] = [];
    this.http.get(this.URL).subscribe((results) => {
      let data : any[] = [];
      // @ts-ignore
      for( let result of results){
        data.push(result);
      }
      for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        var jsonToPrint = JSON.stringify(data[i]);
        var str = jsonToPrint.slice(1, jsonToPrint.length - 1);
        var newarrI = str.split(",");
        var newarrII = newarrI[0].split(":");
        var newarrIII = newarrI[1].split(":");
        var str2 = newarrII[1].slice(1, newarrII[1].length - 1);
        var str3 = newarrIII[1].slice(1, newarrIII[1].length - 1);
        if (str3 == 'nvarchar') {
          dimensions.push(str2);
        } else {
          mesures.push(str2);
        }
      }
    });
    return {"dimensions":dimensions,"mesures":mesures};
  }
  changeMessageMes(message: any) {
    this.messageSourceMes.next(message);
  }

  getDroppedColumn(mesure: string, dimension: string) {
    return this.http.get('http://backend-iot.pmc.tn/api/ping/UnigesBI_Data?GroupBy=' + dimension + '&Measures=' + mesure);
  }
  getDataFiltered(dimension: string, mesure: string, mesureWithFilter: string, logicalExpression: string, number: string) {
    return this.http.get('http://backend-iot.pmc.tn/api/ping/UnigesBI_Data?GroupBy=' +dimension+'&Measures='+mesure+'&Where='+mesureWithFilter+logicalExpression+number);
  }


}
