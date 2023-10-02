import { Pipe, PipeTransform } from '@angular/core';
import { CustomerType } from '../enums/customer-type';

@Pipe({ name: 'getNameCustomerTypeEnum' })
export class GetNameCustomerTypePipe implements PipeTransform {
  transform(value: CustomerType, exponent = 1): string {
    switch (value) {
      case CustomerType.Personal:
        return 'Cuenta personal';
        break;
      case CustomerType.Corporativo:
        return 'Cuenta corporativa';
        break;
    }
  }
}
