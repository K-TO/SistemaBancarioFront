import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Projector } from 'src/app/core/models/projector';
import { ProjectorResponse } from 'src/app/core/models/projector-response';
import { ProjectionService } from 'src/app/core/services/projection.service';

@Component({
  selector: 'app-proyection',
  templateUrl: './proyection.component.html',
  styleUrls: ['./proyection.component.css'],
})
export class ProyectionComponent implements OnInit {
  proyectionResults: boolean = false;
  hasError: boolean = false;
  submitted: boolean = false;
  messaje: string = '';
  projectForm: Projector = new Projector(new Date(), new Date(), 0, 0);
  projection: ProjectorResponse = new ProjectorResponse(0, 0, 0, 0);
  projectionForm: FormGroup = new FormGroup({
    beginDate: new FormControl(''),
    endDate: new FormControl(''),
    money: new FormControl(''),
    interest: new FormControl(''),
  });

  constructor(
    private projectionService: ProjectionService,
    private formBuilder: FormBuilder
  ) {
   
  }

  ngOnInit(): void {
    this.projectionForm = this.formBuilder.group({
      beginDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      money: ['', [Validators.required]],
      interest: ['', [Validators.required]]
    });
  }

  makeProjection() {
    this.submitted = true;
    if (this.projectionForm.invalid) {
      this.messaje = 'Corrige los errores antes de continuar';
      this.hasError = true;
      return;
    } else if (
      this.projectionForm.value.beginDate > this.projectionForm.value.endDate
    ) {
      this.messaje = 'La fecha inicial debe ser menor a la fecha final.';
      this.hasError = true;
      return;
    } else {
      this.projectForm.beginDate = this.projectionForm.value.beginDate;
      this.projectForm.endDate = this.projectionForm.value.endDate;
      this.projectForm.interest = this.projectionForm.value.interest;
      this.projectForm.money = this.projectionForm.value.money;
      this.hasError = false;
      this.getProjection(this.projectForm);
    }
  }

  getProjection(formData: Projector) {
    this.projectionService.getProjection(formData)
    .subscribe((response: ProjectorResponse) => {
      this.proyectionResults = true;
      this.projection = response;
      console.log(this.projection)
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.projectionForm.controls;
  }
}
