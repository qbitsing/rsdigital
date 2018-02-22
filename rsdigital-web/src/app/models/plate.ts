export class PlateOrder {
  public name: string
  public value: number
  public amount: number
  public description: string

  constructor(
    plate: any,
    name?: string,
    value?: number,
    amount?: number,
    description?: string
  ) {
    if (plate) {
      this.name = plate.name
      this.value = plate.value
      this.amount = plate.amount
      this.description = plate.description
    } else {
      this.name = name
      this.value = value
      this.amount = amount
      this.description = description
    }
  }

  public getDescription(): Array<string> {
    return this.description.split(/\n/g)
  }
}
