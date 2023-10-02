import { Report } from "./report";

export class Dashboard {
  totalRegistros: number;
  totalEstaciones: number;
  recaudoReport: Report;

  constructor(
    totalRegistros: number,
    totalEstaciones: number,
    recaudoReport: Report
  ) {
    this.totalRegistros = totalRegistros;
    this.totalEstaciones = totalEstaciones;
    this.recaudoReport = recaudoReport;
  }
}