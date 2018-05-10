import { PlateOrder } from './plate'
import { Addons } from './addons'

export class Order {
  public id: string
  public table: string
  public address: string
  public plates: Array<PlateOrder>
  public addons: Array<Addons>
  public active: Boolean
  public canceled: Boolean
  public finished: Boolean
  public finishAt: number
  public user: string
  constructor(
    table?: string,
    address?: string,
    plates?: Array<PlateOrder>,
    addons?: Array<Addons>,
    user?: string
  ) {
    this.id = '' + Date.now()
    this.address = address
    this.table = table
    this.plates = plates
    this.addons = addons || []
    this.active = true
    this.canceled = false
    this.finished = false
    this.user = user
  }
}
