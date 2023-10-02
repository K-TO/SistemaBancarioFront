export class ProjectorResponse {
  totalInterest: number;
  money: number;
  totalMonths: number;
  totalDays: number;

  constructor(
    totalInterest: number,
    money: number,
    totalMonths: number,
    totalDays: number
  ) {
    this.totalInterest = totalInterest;
    this.money = money;
    this.totalMonths = totalMonths;
    this.totalDays = totalDays;
  }
}
