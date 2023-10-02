import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsComponent } from './components/movements/movements.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ProyectionComponent } from './components/proyection/proyection.component';

const routes: Routes = [
  {
    path: 'movements',
    component: MovementsComponent
  },
  {
    path: 'withdrawall',
    component: WithdrawalComponent
  },
  {
    path: 'request',
    component: RequestsComponent
  },
  {
    path: 'projections',
    component: ProyectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionalRoutingModule { }
