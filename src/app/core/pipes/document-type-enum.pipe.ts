import { Pipe, PipeTransform } from '@angular/core';
import { DocumentType } from '../enums/document-type';

@Pipe({ name: 'getNameDocumentTypeEnum' })
export class GetNameDocumentTypePipe implements PipeTransform {
  transform(value: DocumentType, exponent = 1): string {
    switch (value) {
      case DocumentType.CedulaCiudadania:
        return 'Cédula de ciudadania';
        break;
      case DocumentType.CedulaExtrangeria:
        return 'Cédula de extrangeria';
        break;
      case DocumentType.Nit:
        return 'NIT';
        break;
      case DocumentType.Pasaporte:
        return 'Pasaporte';
        break;
    }
  }
}
