export class TopCustomersReport {
  customerId: string;
  name: string;
  customerType: number;
  productType: number;
  balance: number;

  constructor(
    customerId: string,
    name: string,
    customerType: number,
    productType: number,
    balance: number
  ) {
    this.customerId = customerId;
    this.name = name;
    this.customerType = customerType;
    this.productType = productType;
    this.balance = balance;
  }
}
