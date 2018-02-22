import { PlateOrder } from './plate'
import { Addons } from './addons'

export class Order {
  public id: string
  public table: string
  public plates: Array<PlateOrder>
  public addons: Array<Addons>
  public active: Boolean
  public finishAt: number
  constructor(
    order: any,
    table?: string,
    plates?: Array<PlateOrder>,
    addons?: Array<Addons>
  ) {
    if (order) {
      this.id = order.id
      this.table = order.table
      this.plates = order.plates.map(p => new PlateOrder(p))
      this.addons = order.addons ? order.addons.map(a => new Addons(a)) : []
      this.active = true
    } else {
      this.id = '' + Date.now()
      this.table = table
      this.plates = plates
      this.addons = addons || []
      this.active = true
    }
  }

  public editPlate(index: number, plate: PlateOrder): void {
    this.plates[index] = plate
  }

  public addPlate(plate: PlateOrder): void {
    this.plates.push(plate)
  }

  public editAddon(index: number, addon: Addons): void {
    this.addons[index] = addon
  }

  public addAddon(addon: Addons): void {
    this.addons.push(addon)
  }

  public finished() {
    this.active = false
    this.finishAt = Date.now()
  }

  public chrage(): number {
    let total = 0
    for (const { value, amount } of this.plates) { 
      total += value * amount
    }

    for (const { value, amount } of this.addons) {
      total += value * amount
    }

    return total
  }
}
