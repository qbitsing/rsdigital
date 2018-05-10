import { Component, OnInit, Input, Inject } from '@angular/core'
import { Order } from '../models/order'
import { OrderService } from '../services/order.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order
  @Input() languaje: string
  public total: number
  public text = {}
  public user: any
  constructor(public orderService: OrderService, public dialog: MatDialog) {
    this.text['Español'] = {
      mesa: 'Mesa',
      editar: 'Editar',
      cobrar: 'Cobrar',
      cancelar: 'Cancelar',
      fializar: 'Finalizar'
    }

    this.text['Ingles'] = {
      mesa: 'Table',
      editar: 'Edit',
      cobrar: 'Charge',
      cancelar: 'Cancel',
      fializar: 'Finihs'
    }
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'))
  }

  chrage() {
    let total = 0
    for (const { value, amount } of this.order.plates) {
      total += value * amount
    }
    if (this.order.addons) {
      for (const { value, amount } of this.order.addons) {
        total += value * amount
      }
    }
    this.openDialog(total)
  }

  cancel() {
    if (this.order.active) {
      this.order.active = false
      this.order.canceled = true
      this.orderService.updateOrder(this.order)
    }
  }

  finish() {
    if (this.order.active) {
      this.order.active = false
      this.order.finishAt = + Date.now()
      this.order.finished = true
      this.orderService.updateOrder(this.order)
    }
  }

  openDialog(total) {
    const dialogRef = this.dialog.open(DialogChargeComponent, {
      width: '250px',
      data: { total }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.finish()
      }
    })
  }

  getState() {
    if (this.order.active) {
      return 'Activa'
    }

    if (this.order.finished) {
      return 'Finaizada'
    }

    if (this.order.canceled) {
      return 'Cancelada'
    }
  }

}

@Component({
  selector: 'app-dialog-chrage-component',
  templateUrl: './charge.component.html',
})
export class DialogChargeComponent {

  constructor(public dialogRef: MatDialogRef<DialogChargeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(p): void {
    this.dialogRef.close(p)
  }

}
