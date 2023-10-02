import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/core/models/movement';
import { MovementService } from 'src/app/core/services/movement.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  
  customerId: string = '';
  movements: Movement[] = [
    new Movement('', 0, 0, 0, new Date(), '', '')
  ];

  constructor(private movementService: MovementService){
  }

  ngOnInit(){
    this.customerId = JSON.parse(sessionStorage['auth-user']).id;
    this.getMovements();
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

  getMovements(){
    return this.movementService.getCustomerMovements(this.customerId)
    .subscribe((data: Movement[]) => {
      console.log('movements')
      console.log(data)
      this.movements = data;
    })
  }
}
