export class Addons {
  public name: string
  public value: number
  public amount: number

  constructor(
    addon: any,
    name?: string,
    value?: number,
    amount?: number
  ) {
    if (addon) {
      this.name = addon.name
      this.value = addon.value
      this.amount = addon.amount
    } else {
      this.name = name
      this.value = value
      this.amount = amount
    }
  }
}
