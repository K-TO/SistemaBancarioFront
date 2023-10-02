import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductType } from 'src/app/core/enums/product-type';
import { EnableProduct } from 'src/app/core/models/enable-product';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css'],
})
export class FormProductsComponent implements OnInit {
  @Input() customerId: string = '';
  @Input() productType: ProductType = ProductType.Ahorros;
  myForm: FormGroup = new FormGroup({
    customerId: new FormControl(''),
    productId: new FormControl(''),
    interest: new FormControl(''),
    currentBalance: new FormControl(''),
  });
  submitted = false;
  messaje = '';
  hasError: boolean = false;
  enableProductModel: EnableProduct;
  hideInterest: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
    this.enableProductModel = new EnableProduct('', 0, 0, 0.4);
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      currentBalance: [
        '',
        [
          Validators.required,
          Validators.pattern('^[-+]?[0-9]+.[0-9]+$'),
          Validators.min(10000),
        ],
      ],
      interest: [
        '',
        [Validators.pattern('^[0-9]+?.?[0-9]+$'), Validators.min(0), Validators.max(10)],
      ],
    });
    this.hideInterest =
      this.productType == ProductType.Ahorros ||
      this.productType == ProductType.Corriente;
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      customerId: '',
      productId: '',
      interest: '',
      currentBalance: '',
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  public submitForm() {
    let interestValid = true;
    this.submitted = true;
    this.myForm.value.customerId = this.customerId;
    this.myForm.value.productType = this.productType;
    if (this.productType == ProductType.Ahorros) {
      this.myForm.value.interest = 0.4;
    } else if (this.productType == ProductType.Corriente) {
      this.myForm.value.interest = 0;
    } else if (this.productType == ProductType.CDT) {
      interestValid = this.myForm.value.interest && this.myForm.value.interest >= 0;
      if (!interestValid) {
        this.hasError = true;
        this.messaje = "El interes es requerido.";
      }
    }
    if (this.myForm.invalid) {
      this.messaje = 'Corrige los errores antes de continuar';
      this.hasError = true;
      return;
    } 
    if (this.myForm.valid && interestValid) {
      this.activeModal.close(this.myForm.value);
    }
  }
}
