import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  constructor() {

  }

  ngOnInit(){
    $('#dataTable').DataTable({
      "language": {
        "lengthMenu": "Mostrando _MENU_ registros por página",
        "zeroRecords": "No hay datos para mostrar",
        "info": "Mostrando página  _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(Filtrando desde _MAX_ registros totales)",
        "search": "Buscar:",
    }
    });
  }

}
