import { ProductStatus } from "../enums/product-status";
import { ProductType } from "../enums/product-type";

export class Product {
    id: string;
    productStatus: ProductStatus;
    productType: ProductType;
    currentBalance: number;
    interest: number;
    creationDate: Date;

    constructor (id: string,
        productStatus: ProductStatus,
        productType: ProductType,
        currentBalance: number,
        interest: number,
        creationDate: Date) {
            this.id =  id ;
            this.productStatus = productStatus;
            this.productType = productType;
            this.currentBalance = currentBalance;
            this.interest = interest;
            this.creationDate =creationDate;
    }
}

