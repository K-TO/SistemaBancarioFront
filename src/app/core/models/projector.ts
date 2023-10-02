export class Projector {
  beginDate: Date;
  endDate: Date;
  money: number;
  interest: number;

  constructor(beginDate: Date, endDate: Date, money: number, interest: number) {
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.money = money;
    this.interest = interest;
  }
}
