import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/core/enums/product-type';
import { AverageReportResponse } from 'src/app/core/models/average-report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-average-balance',
  templateUrl: './average-balance.component.html',
  styleUrls: ['./average-balance.component.css'],
})
export class AverageBalanceComponent implements OnInit {

  report: AverageReportResponse[] = [new AverageReportResponse(0, 0)];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.getReport();
    $('#dataTable').DataTable({
      "language": {
        "lengthMenu": "Mostrando _MENU_ registros por página",
        "zeroRecords": " ",
        "info": "Mostrando página  _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(Filtrando desde _MAX_ registros totales)",
        "search": "Buscar:",
    }});
  }

  getReport(){
    return this.reportService.getAverageProductsReport(ProductType.CDT)
    .subscribe((data: AverageReportResponse[]) => {
      this.report = data;
    })
  }
}
