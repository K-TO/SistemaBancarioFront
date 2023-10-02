import { Component, OnInit } from '@angular/core';
import { TopReport } from 'src/app/core/models/TopReport';
import { TopCustomersReport } from 'src/app/core/models/top-customers-report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html',
  styleUrls: ['./top-customers.component.css']
})
export class TopCustomersComponent implements OnInit {

  topReport: TopReport;
  languages: any;

  constructor(private reportService: ReportService) {
    this.topReport = new TopReport(
      [new TopCustomersReport('', '', 0, 0, 0)],
      [new TopCustomersReport('', '', 0, 0, 0)],
      [new TopCustomersReport('', '', 0, 0, 0)]
    );
   
    this.languages = {
      "lengthMenu": "Mostrando _MENU_ registros por página",
      "zeroRecords": " ",
      "info": "Mostrando página  _PAGE_ de _PAGES_",
      "infoEmpty": "No hay registros disponibles",
      "infoFiltered": "(Filtrando desde _MAX_ registros totales)",
      "search": "Buscar:",
  };
  }

  ngOnInit(): void {
    this.getCDTReport();
    $('#dataTableCdt').DataTable({
      "language": this.languages,
    });
    $('#dataTableSavings').DataTable({
      "language": this.languages
    });
    $('#dataTableCurrent').DataTable({
      "language": this.languages
    });
  }

  getCDTReport(){
    return this.reportService.getTopCustomersReport()
    .subscribe((data: TopReport) => {
      this.topReport = data;
    })
  }

}
