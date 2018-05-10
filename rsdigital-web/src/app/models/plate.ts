export class PlateOrder {
  public name: string
  public value: number
  public amount: number
  public description: string

  constructor(
    name: string,
    value: number,
    amount: number,
    description: string
  ) {
    this.name = name
    this.value = value
    this.amount = amount
    this.description = description
  }
}
