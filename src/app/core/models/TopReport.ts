import { TopCustomersReport } from "./top-customers-report";

export class TopReport {
    topForCDT: TopCustomersReport[];
    topForCurent: TopCustomersReport[];
    topForSavings: TopCustomersReport[];
  
    constructor(
      topForCDT: TopCustomersReport[],
      topForCurent: TopCustomersReport[],
      topForSavings: TopCustomersReport[]
    ) {
      this.topForCDT = topForCDT;
      this.topForCurent = topForCurent;
      this.topForSavings = topForSavings;
    }
  }