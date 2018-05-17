import { Component, OnInit } from '@angular/core'
import { Order } from '../models/order'
import { OrderService } from '../services/order.service'
import { MatDialog } from '@angular/material'
import { DialogComponent, AppComponent } from '../app.component'
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: Array<Order>
  public languaje: string
  public user: any
  constructor(
    private orderService: OrderService,
    public dialog: MatDialog,
  private parent: AppComponent) {
  }

  ngOnInit() {
    this.user = this.orderService.getUser() || {}
    this.languaje = this.orderService.getLanguaje()
    this.orderService.getOrders()
      .valueChanges().subscribe((orders: Array<Order>) => {
        this.orders = orders.filter(o => (this.user.rol === 'mesero') ? o.active : o.active && o.user === this.user.email)
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { languaje: this.languaje }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.languaje = result || this.languaje
      this.orderService.setLanguaje(this.languaje)
    })
  }

  rute(str) {
    this.parent.ruta = str
    this.parent.id = 'new'
  }

}
