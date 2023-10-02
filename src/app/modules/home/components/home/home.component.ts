import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  NgbCalendar,
  NgbDateStruct,
  NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Recaudo } from 'src/app/core/models/recaudo';
import { RecaudoReport } from 'src/app/core/models/recaudoReport';
import { Report } from 'src/app/core/models/report';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasError: boolean = false;
  messaje: string = '';
  submitted: boolean = false;
  message: string = '';

  form: FormGroup = new FormGroup({
    beginDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  constructor(
    private reportService: ReportService
  ) {
   
  }

  ngOnInit() {
  }

}
