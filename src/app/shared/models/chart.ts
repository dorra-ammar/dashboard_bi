import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";

export interface Chart {
    labelList?: Label[] | undefined;
    dataList?: ChartDataSets[] | undefined;
    chartType?: ChartType | undefined;
    legend?: boolean | undefined;
    optionsList?: ChartOptions | undefined;
    dimension?: ChartOptions | undefined;
}
