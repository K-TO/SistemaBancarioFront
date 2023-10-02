import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionalRoutingModule } from './transactional-routing.module';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { MovementsComponent } from './components/movements/movements.component';
import { SharedModule } from '@coreui/angular';
import { RequestsComponent } from './components/requests/requests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { ProyectionComponent } from './components/proyection/proyection.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    WithdrawalComponent,
    MovementsComponent,
    RequestsComponent,
    FormProductsComponent,
    ProyectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransactionalRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    WithdrawalComponent,
    MovementsComponent
  ]
})
export class TransactionalModule { }
