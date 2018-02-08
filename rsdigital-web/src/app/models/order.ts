import { PlateOrder } from './plate'
import { Addons } from './addons'

export class Order {
  public id: number
  public table: string
  public plates: Array<PlateOrder>
  public addons: Array<Addons>
  constructor(
    table: string,
    plates: Array<PlateOrder>,
    addons: Array<Addons>
  ) {
    this.id = Date.now()
    this.table = table
    this.plates = plates
    this.addons = addons
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
}
