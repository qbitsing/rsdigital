import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public plates: Array<Object>
  public order: any = {}
  public plate: any = {}
  constructor() {
    this.plates = [
      { name: 'Carne', available: true },
      { name: 'Pernil', available: true },
      { name: 'Pechuga', available: true },
      { name: 'Lomito de Mojarra', available: true },
      { name: 'Milanesa de Pollo', available: true },
      { name: 'Lomo de Cerdo', available: true },
      { name: 'Robalo', available: true },
      { name: 'Menu de Robalo', available: false },
      { name: 'Trucha', available: true },
      { name: 'Menu de Trucha', available: true },
      { name: 'Mojarra', available: true },
      { name: 'Bagre', available: true }
    ]
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.order.plates) {
      this.order.plates = []
    }

    this.order.plates.push(this.plate)
    this.plate = {}
  }

}
