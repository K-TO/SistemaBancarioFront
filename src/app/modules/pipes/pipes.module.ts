import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetNameProductTypePipe } from 'src/app/core/pipes/custom-enums.pipe';
import { GetNameCustomerTypePipe } from 'src/app/core/pipes/customer-type-enum.pipe';
import { GetNameDocumentTypePipe } from 'src/app/core/pipes/document-type-enum.pipe';

@NgModule({
  declarations: [
    GetNameProductTypePipe,
    GetNameCustomerTypePipe,
    GetNameDocumentTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetNameProductTypePipe,
    GetNameCustomerTypePipe,
    GetNameDocumentTypePipe
  ]
})
export class PipesModule { }
