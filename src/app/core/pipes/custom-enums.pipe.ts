import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../enums/product-type';

@Pipe({name: 'getNameEnum'})

export class GetNameProductTypePipe implements PipeTransform {
    transform(value: ProductType, exponent = 1): string {
        switch (value){
            case ProductType.Ahorros:
                return "Cuenta de Ahorros";
            break;
            case ProductType.CDT:
                return "CDT"
            break;
            case ProductType.Corriente:
                return "Cuenta Corriente";
            break;
        }
    }
  }