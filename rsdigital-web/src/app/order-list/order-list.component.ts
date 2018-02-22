import { Component, OnInit } from '@angular/core'
import { Order } from '../models/order'
import { OrderService } from '../services/order.service'
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: Array<Order>
  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
    this.orderService.getOrders()
      .valueChanges().subscribe((orders: Array<Order>) => {
        this.orders = orders.map(o => new Order(o))
      })
  }

}
