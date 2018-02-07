import { Component, OnInit } from '@angular/core'

const order = {
  table: 2,
  date: new Date(),
  plates: [
    {
      name: 'Carne',
      type: 'bistec',
      amount: 1,
      description: `
        Con frijol
        sin arroz
        ensalada de tomate y cebolla
      `
    },
    {
      name: 'Pechuga',
      type: 'plancha',
      amount: 3,
      description: `
        2 con salsa de ciruelas
        1 ajillo
        frijol
      `
    }
  ]
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: Array<Object>
  constructor() {
    this.orders = new Array(10).fill(order)
  }

  ngOnInit() {
  }

}
