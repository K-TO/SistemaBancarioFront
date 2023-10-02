import { CustomerType } from "../enums/customer-type";
import { DocumentType } from "../enums/document-type";

export class Register {
  name: string;
  identification: string;
  documentType: DocumentType;
  cellPhone: string;
  customerType: CustomerType;
  password: string;
  legalRepresentName: string;
  legalRepresentPhone: string;

  constructor(
    name: string,
    identification: string,
    documentType: DocumentType,
    cellPhone: string,
    customerType: CustomerType,
    password: string,
    legalRepresentName: string,
    legalRepresentPhone: string
  ) {
    this.name = name;
    this.identification = identification;
    this.documentType = documentType;
    this.cellPhone = cellPhone;
    this.customerType = customerType;
    this.password = password;
    this.legalRepresentName = legalRepresentName;
    this.legalRepresentPhone = legalRepresentPhone;
  }
}
