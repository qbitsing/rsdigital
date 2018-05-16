import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public orders
  public total
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .valueChanges().subscribe((orders) => {
        const fecha = new Date()
        fecha.setHours(0, 0, 0, 0)
        this.total = 0
        this.orders = orders.filter((o: any) => {
          const f = new Date()
          f.setTime(o.id)
          f.setHours(0, 0, 0, 0)
          return fecha.getTime() === f.getTime()
        })
        this.orders.forEach(element => {
          this.total += this.getTotalOrder(element)
        })
      })
  }

  getTotalOrder(o) {
    let total = 0
    for (const { value, amount } of o.plates) {
      total += value * amount
    }
    if (o.addons) {
      for (const { value, amount } of o.addons) {
        total += value * amount
      }
    }
    return total
  }

}
