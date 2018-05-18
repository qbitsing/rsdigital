import { Component, OnInit, Input, Inject } from '@angular/core'
import { Order } from '../models/order'
import { OrderService } from '../services/order.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { AppComponent } from '../app.component';
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
  constructor(private parent: AppComponent, public orderService: OrderService, public dialog: MatDialog) {
    this.text['Español'] = {
      mesa: 'Mesa',
      direccion: 'Dirección',
      editar: 'Editar',
      cobrar: 'Cobrar',
      cancelar: 'Cancelar',
      fializar: 'Finalizar',
      state: 'Estado'
    }

    this.text['English'] = {
      direccion: 'Direction',
      mesa: 'Table',
      editar: 'Edit',
      cobrar: 'Charge',
      cancelar: 'Cancel',
      fializar: 'Finihs',
      state: 'State'
    }

    this.text['Français'] = {
      mesa: 'Table',
      direccion: 'Adresse',
      editar: 'Modifier',
      cobrar: 'Charge',
      cancelar: 'Annuler',
      fializar: 'Terminer',
      state: 'Etat'
    }

    this.text['Italiano'] = {
      mesa: 'Tabella',
      direccion: 'Indirizzo',
      editar: 'Modifica',
      cobrar: 'Carica',
      cancelar: 'Annulla',
      fializar: 'Fine',
      state: 'Stato'
    }
  }

  ngOnInit() {
    this.user = this.orderService.getUser() || {}
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
      width: '400px',
      data: { total, order: this.order, languaje: this.languaje }
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

  rute(str, id) {
    this.parent.ruta = str
    this.parent.id = id
  }

}

@Component({
  selector: 'app-dialog-chrage-component',
  templateUrl: './charge.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class DialogChargeComponent {
  text: any
  constructor(public dialogRef: MatDialogRef<DialogChargeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.text = {}
    this.text['Español'] = {
      textRestaurante: 'Restaurante',
      textHorario: 'Horario',
      textNit: 'Nit',
      textDireccion: 'Dirección',
      textTelefono: 'Telefono',
      textMesa: 'Mesa',
      textCant: '#',
      textDescripcion: 'Descripción',
      textValor: 'Valor',
      textTotal: 'Total',
      textCerrar: 'Cerrar Orden',
      textCancelar: 'Cancelar'
    }

    this.text['English'] = {
      textRestaurante: 'Restaurant',
      textHorario: 'Schedule',
      textNit: 'Nit',
      textDireccion: 'Address',
      textTelefono: 'Phone',
      textMesa: 'Mesa',
      textCant: '#',
      textDescripcion: 'Description',
      textValor: 'Value',
      textTotal: 'Total',
      textCerrar: 'Close Order',
      textCancelar: 'Cancel'
    }

    this.text['Français'] = {
      textRestaurante: 'Restaurant',
      textHorario: 'Calendrier',
      textNit: 'Nit',
      textDireccion: 'Adresse',
      textTelefono: 'Téléphone',
      textMesa: 'Mesa',
      textCant: '#',
      textDescripcion: 'Description',
      textValor: 'Value',
      textTotal: 'Total',
      textCerrar: 'Close Order',
      textCancelar: 'Annuler'
    }

    this.text['Italiano'] = {
      textRestaurante: 'Restaurant',
      textHorario: 'Calendrier',
      textNit: 'Nit',
      textDireccion: 'Adresse',
      textTelefono: 'Téléphone',
      textMesa: 'Mesa',
      textCant: '#',
      textDescripcion: 'Description',
      textValor: 'Value',
      textTotal: 'Total',
      textCerrar: 'Close Order',
      textCancelar: 'Annuler'
    }
  }

  onNoClick(p): void {
    this.dialogRef.close(p)
  }

}
