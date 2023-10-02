import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AverageBalanceComponent } from './components/average-balance/average-balance.component';
import { TopCustomersComponent } from './components/top-customers/top-customers.component';

const routes: Routes = [
  {
    path: 'average-balance',
    component: AverageBalanceComponent,
  },
  {
    path: 'top-customers',
    component: TopCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
