import { Injectable } from '@angular/core'
import { Order } from '../models/order'
import { AngularFireDatabase } from 'angularfire2/database/database'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class OrderService {
  constructor(private db: AngularFireDatabase) { }

  public saveOrder(order: Order) {
    return this.db.database.ref('orders/' + order.id).set(order)
  }

  public updateOrder(order: Order) {
    return this.db.database.ref('orders/' + order.id).set(order)
  }

  public getOrders() {
    return this.db.list('orders')
  }

  public getOrder(id) {
    return this.db.object(`orders/${id}`)
  }

  public login(email) {
    return this.db.object(`users/${email}`)
  }

  public register(user: any) {
    return this.db.database.ref(`users/${user.email}`).set(user)
  }

  public users() {
    return this.db.list('users')
  }

}
