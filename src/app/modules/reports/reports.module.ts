import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from 'src/app/core/services/report.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TopCustomersComponent } from './components/top-customers/top-customers.component';
import { AverageBalanceComponent } from './components/average-balance/average-balance.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    TopCustomersComponent,
    AverageBalanceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [],
  providers: [ReportService, DecimalPipe],
})
export class ReportsModule {}
