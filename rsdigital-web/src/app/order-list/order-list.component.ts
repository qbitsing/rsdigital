import { Component, OnInit, Input } from '@angular/core'
import { Order } from '../models/order'
import { OrderService } from '../services/order.service'
import { DialogComponent, AppComponent } from '../app.component'
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: Array<Order>
  @Input() languaje: string
  public user: any
  constructor(
    private orderService: OrderService,
    private parent: AppComponent) {
  }

  ngOnInit() {
    this.user = this.orderService.getUser() || {}
    this.orderService.getOrders()
      .valueChanges().subscribe((orders: Array<Order>) => {
        this.orders = orders.filter(o => (this.user.rol === 'mesero') ? o.active : o.active && o.user === this.user.email)
      })
  }

  rute(str) {
    this.parent.ruta = str
    this.parent.id = 'new'
  }

}
