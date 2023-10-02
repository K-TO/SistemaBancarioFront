export class AverageReportResponse {
  productType: number;
  averageBalance: number;

  constructor(productType: number, averageBalance: number) {
    this.productType = productType;
    this.averageBalance = averageBalance;
  }
}
