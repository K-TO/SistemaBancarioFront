import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerType } from 'src/app/core/enums/customer-type';
import { DocumentType } from 'src/app/core/enums/document-type';
import { BasicResponse } from 'src/app/core/models/basic-response';
import { Register } from 'src/app/core/models/register';
import { RegisterResponse } from 'src/app/core/models/register-response';
import { UserService } from 'src/app/core/services/user.service';
import { confirmPasswordValidator } from 'src/app/core/utils/confirm-password-validation.utils';
import { corporativeDataValidator } from 'src/app/core/utils/corporative-data-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  customerTypes: any;
  documentTypes: any;
  accountType: CustomerType;
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    identification: new FormControl(''),
    documentType: new FormControl(''),
    cellPhone: new FormControl(''),
    customerType: new FormControl(''),
    legalRepresentName: new FormControl(''),
    legalRepresentPhone: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  });

  submitted = false;
  messaje = '';
  hasError: boolean = false;
  registerModel: Register;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ){ 
    this.registerModel = new Register('','',0,'',0,'','','');
    this.customerTypes = Object.values(CustomerType).filter((v) => !isNaN(Number(v)));
    this.documentTypes = Object.values(DocumentType).filter((v) => !isNaN(Number(v)));
    this.accountType = CustomerType.Corporativo;
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.pattern("[a-zA-Z0 ]*"),
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      identification: [
        '',
        [
          Validators.pattern("[0-9]*"),
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      cellPhone: [
        '',
        [
          Validators.pattern("3[0-9]{9}"),
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      customerType: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
        ],
      ],
      documentType: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
        ],
      ],
      legalRepresentName: [
        '',
        [
          corporativeDataValidator
        ],
      ],
      legalRepresentPhone: [
        '',
        [
          corporativeDataValidator
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
    },{
      Validators: corporativeDataValidator
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  changeAccountType(value:string){
    this.accountType = parseInt(value);
  }

  registerUser(){
    this.submitted = true;
    if (this.form.invalid) {
      this.messaje = "Corrige los errores antes de continuar";
      this.hasError = true;
      return;
    } else if (this.form.value.password !== this.form.value.repeatPassword) {
      this.messaje = "Las contraseña y la confirmación de contraseña, no coinciden.";
      this.hasError = true;
      return;
    } else {
      this.messaje = '';
      this.registerModel = new Register(
        this.form.value.name,
        this.form.value.identification,
        parseInt(this.form.value.documentType),
        this.form.value.cellPhone,
        parseInt(this.form.value.customerType),
        this.form.value.password,
        this.form.value.legalRepresentName,
        this.form.value.legalRepresentPhone,
      );
      this.userService.registerUser(this.registerModel)
      .subscribe((response: BasicResponse) => {
        this.messaje = response.message;
        this.hasError = response.hasError;
      });
    }
  }

}
