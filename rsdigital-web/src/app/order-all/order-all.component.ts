import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { MatDialog } from '@angular/material';
import { DialogComponent, AppComponent } from '../app.component';

@Component({
  selector: 'app-order-all',
  templateUrl: './order-all.component.html',
  styleUrls: ['./order-all.component.css']
})
export class OrderAllComponent implements OnInit {

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
        this.orders = orders.filter(o => (this.user.rol === 'mesero') ? true : o.user === this.user.email)
      })
  }

  rute(str) {
    this.parent.ruta = str
    this.parent.id = 'new'
  }

}
