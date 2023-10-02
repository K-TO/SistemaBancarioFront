import { ProductType } from "../enums/product-type";

export class EnableProduct {
    customerId: string;
    productType: ProductType;
    currentBalance: number;
    interest: number;

    constructor (customerId: string,
        productType: ProductType,
        currentBalance: number,
        interest: number) {
            this.customerId = customerId;
            this.productType = productType;
            this.currentBalance = currentBalance;
            this.interest = interest;
    }
}