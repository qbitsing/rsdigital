import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order'
import { PlateOrder } from '../models/plate'
import { Addons } from '../models/addons'
import { OrderService } from '../services/order.service'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public plates: Array<Object>
  public order: any = {}
  public plate: any = {}
  public addon: any = {}
  public id: string
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.plates = [
      { value: 8000, name: 'Carne', available: true },
      { value: 8000, name: 'Pernil', available: true },
      { value: 8000, name: 'Pechuga', available: true },
      { value: 8000, name: 'Lomito de Mojarra', available: true },
      { value: 8000, name: 'Milanesa de Pollo', available: true },
      { value: 10000, name: 'Lomo de Cerdo', available: true },
      { value: 15000, name: 'Robalo', available: true },
      { value: 12000, name: 'Menu de Robalo', available: true },
      { value: 17000, name: 'Trucha', available: true },
      { value: 12000, name: 'Menu de Trucha', available: true },
      { value: 15000, name: 'Mojarra', available: true },
      { value: 15000, name: 'Bagre', available: true }
    ]
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id !== 'new') {
      this.order = this.orderService.getOrder(this.id) || {}
    }

    console.log(this.order)
  }

  addPlateToOrder() {
    if (!this.order.plates) {
      this.order.plates = []
    }

    this.order.plates.push(new PlateOrder(
      null,
      this.plate.name.name,
      this.plate.name.value,
      this.plate.amount,
      this.plate.description
    ))
    this.plate = {}
  }

  addAddonToOrder() {
    if (!this.order.addons) {
      this.order.addons = []
    }

    this.order.addons.push(new Addons(
      null,
      this.addon.name,
      this.addon.value,
      this.addon.amount
    ))
    this.addon = {}
  }

  onSubmit() {
    const order = new Order(
      null,
      this.order.table,
      this.order.plates,
      this.order.addons
    )
    this.orderService.saveOrder(order).then((...res) => {
      console.log(res)
    })

    this.order = {}
  }

}
