import { MovementType } from '../enums/movement-type';

export class Movement {
  id: string;
  movementType: MovementType;
  value: number;
  previousBalance: number;
  date: Date;
  description: string;
  productId: string;

  constructor(
    id: string,
    movementType: MovementType,
    value: number,
    previousBalance: number,
    date: Date,
    description: string,
    productId: string
  ) {
    this.id = id;
    this.movementType = movementType;
    this.value = value;
    this.previousBalance = previousBalance;
    this.date = date;
    this.description = description;
    this.productId = productId;
  }
}
