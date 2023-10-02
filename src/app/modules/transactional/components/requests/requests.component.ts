import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductStatus } from 'src/app/core/enums/product-status';
import { ProductType } from 'src/app/core/enums/product-type';
import { Product } from 'src/app/core/models/product';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormProductsComponent } from '../form-products/form-products.component';
import { ProductService } from 'src/app/core/services/product.service';
import { EnableProduct } from 'src/app/core/models/enable-product';
import { BasicResponse } from 'src/app/core/models/basic-response';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  customerId: string = '';
  loading: boolean = false;
  customerProducts: Product[];
  customerCDT: Product;
  customerSavings: Product;
  customerCurrent: Product;
  productsForm: FormGroup = new FormGroup({
    customerId: new FormControl(''),
    productId: new FormControl(''),
  });
  avaiableProducts: any;
  messaje = '';
  hasError: boolean = false;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.loading = true;
    this.customerProducts = [
      new Product(
        '',
        ProductStatus.Activo,
        ProductType.Ahorros,
        0,
        0,
        new Date()
      ),
    ];
    this.customerCDT = new Product(
      '',
      ProductStatus.Activo,
      ProductType.Ahorros,
      0,
      0,
      new Date()
    );
    this.customerSavings = new Product(
      '',
      ProductStatus.Activo,
      ProductType.Ahorros,
      0,
      0,
      new Date()
    );
    this.customerCurrent = new Product(
      '',
      ProductStatus.Activo,
      ProductType.Ahorros,
      0,
      0,
      new Date()
    );
  }

  ngOnInit() {
    this.customerId = JSON.parse(sessionStorage['auth-user']).id;
    this.getCustomerProducts(this.customerId);
    this.productsForm = this.formBuilder.group({
      customerId: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      productId: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  getCustomerProducts(customerId: string) {
    return this.customerService
      .getCustomerProducts(customerId)
      .subscribe((data: Product[]) => {
        console.log('trayendo prods');
        this.customerProducts = data;
        this.setAvaiableProducts();
        this.customerCDT =
          data.filter((prod) => prod.productType === ProductType.CDT)[0] ??
          null;
        this.customerCurrent =
          data.filter(
            (prod) => prod.productType === ProductType.Corriente
          )[0] ?? null;
        this.customerSavings =
          data.filter((prod) => prod.productType === ProductType.Ahorros)[0] ??
          null;
      });
  }

  activateProduct(enableProduct: EnableProduct) {
    return this.productService
      .activateProduct(enableProduct)
      .subscribe((response: BasicResponse) => {
        console.log('activando producto');
        this.getCustomerProducts(this.customerId);
        this.setAvaiableProducts();
        this.messaje = response.message;
        this.hasError = response.hasError;
      });
  }

  cancelProduct(customerId: string, productId: string) {
    return this.productService
      .cancelProduct(customerId, productId)
      .subscribe((response: BasicResponse) => {
        this.getCustomerProducts(this.customerId);
        this.setAvaiableProducts();
        this.messaje = response.message;
        this.hasError = response.hasError;
      });
  }

  setAvaiableProducts() {
    this.avaiableProducts = [0, 1, 2];
    this.customerProducts.forEach((prod) => {
      const index = this.avaiableProducts.indexOf(prod.productType);
      if (index >= 0) {
        this.avaiableProducts.splice(index, 1);
      }
    });
    return;
  }

  disableProduct(customerId: string, productId: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      backdropClass: 'modal-backdrop',
      backdrop: false,
    });

    modalRef.result
      .then((result) => {
        if (result) {
          this.cancelProduct(customerId, productId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  enableProduct(customerId: string, productId: string) {
    const modalRef = this.modalService.open(FormProductsComponent, {
      backdropClass: 'modal-backdrop',
      backdrop: false,
    });

    modalRef.componentInstance.customerId = customerId;
    modalRef.componentInstance.productType = productId;

    modalRef.result
      .then((result) => {
        this.activateProduct(result);
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}
