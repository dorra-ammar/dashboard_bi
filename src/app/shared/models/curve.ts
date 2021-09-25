export class Curve {
  private data: number[];
  private label: string | undefined;
  private yAxisID: string | undefined;

  constructor(data: number[],label?: string,yAxisID?: string) {
    this.data = data;
    this.label = label;
    this.yAxisID = yAxisID;
  }
}
