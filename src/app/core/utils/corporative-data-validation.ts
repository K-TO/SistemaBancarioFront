import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CustomerType } from '../enums/customer-type';

export const corporativeDataValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
    const patternName = new RegExp('[a-zA-Z0-9]');
    const patternCel = new RegExp('/^3[\d]{9}$/');
    let result = false;
    if (control.value.customerType === CustomerType.Corporativo) {
        let resultName = patternName.test(control.value.legalRepresentName);
        let resultCel = patternCel.test(control.value.legalRepresentPhone);
        result = resultName && resultCel;
    } else {
        return null;
    }

  return result
    ? null
    : { CorporativeFails: true };
};
