export class Addons {
  public name: string
  public value: number
  public amount: number

  constructor(
    name: string,
    value: number,
    amount: number
  ) {
    this.name = name
    this.value = value
    this.amount = amount
  }
}
