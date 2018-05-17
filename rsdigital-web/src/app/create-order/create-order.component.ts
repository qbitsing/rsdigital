import { Component, OnInit, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order'
import { PlateOrder } from '../models/plate'
import { Addons } from '../models/addons'
import { OrderService } from '../services/order.service'
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../app.component'


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public plates: Array<Object>
  public order: any = {}
  public plate: any = {}
  public addon: any = {}
  @Input() orderId
  public id: string
  public type: string
  public languaje = ''
  public texts = {}
  public user: any
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.plates = [
      { value: 8000, name: this.setTowNames('carne', 'meat'), available: true },
      { value: 8000, name: this.setTowNames('Pernil', 'Chicken leg'), available: true },
      { value: 8000, name: this.setTowNames('Pechuga', 'Breast'), available: true },
      { value: 8000, name: this.setTowNames('Lomito de Mojarra', 'Lomito de Mojarra'), available: true },
      { value: 8000, name: this.setTowNames('Milanesa de Pollo', 'Chicken Milanese'), available: true },
      { value: 10000, name: this.setTowNames('Lomo de Cerdo', 'Pork Loin'), available: true },
      { value: 15000, name: this.setTowNames('Robalo', 'Bass'), available: true },
      { value: 12000, name: this.setTowNames('Menu de Robalo', 'Bass Menu'), available: true },
      { value: 17000, name: this.setTowNames('Trucha', 'Trout'), available: true },
      { value: 12000, name: this.setTowNames('Menu de Trucha', 'Trout Menu'), available: true },
      { value: 15000, name: this.setTowNames('Mojarra', 'Mojarra'), available: true },
      { value: 15000, name: this.setTowNames('Bagre', 'Catfish'), available: true }
    ]
  }

  setTowNames(nameone, nametow) {
    const names = {}

    names['Español'] = nameone
    names['Ingles'] = nametow

    return names
  }

  ngOnInit() {
    this.languaje = this.orderService.getLanguaje() || 'Ingles'
    this.user = this.orderService.getUser() || { }
    this.id = this.orderId
    if (this.id !== 'new') {
      this.orderService.getOrder(this.id)
        .valueChanges().subscribe((order: Order) => {
          this.order = order
        })
    }
    this.texts['Español'] = {
      createOrder: {
        tablePlaceholder: 'Mesa',
        amountPlaceholder: 'Cantidad',
        platePlaceholder: 'Plato',
        descriptionPlaceHolder: 'Descripción',
        addButton: 'Agregar',
        name: 'Nombre',
        price: 'Precio',
        create: 'Crear Pedido',
        list: 'Lista',
        addons: 'Adicionales',
        removeButton: 'Eliminar',
        address: 'Dirección'
      }
    }
    this.texts['Ingles'] = {
      createOrder: {
        tablePlaceholder: 'Table',
        amountPlaceholder: 'Amount',
        platePlaceholder: 'Plate',
        descriptionPlaceHolder: 'Description',
        addButton: 'Add',
        name: 'Name',
        price: 'Price',
        create: 'Create Order',
        list: 'List',
        addons: 'Addons',
        removeButton: 'Remove',
        address: 'Address'
      }
    }
  }

  addPlateToOrder() {
    if (!this.order.plates) {
      this.order.plates = []
    }

    this.order.plates.push(new PlateOrder(
      this.plate.name.name,
      this.plate.name.value,
      this.plate.amount,
      this.plate.description
    ))
    this.plate = {}
  }

  addAddonToOrder() {
    if (!this.order.addons) {
      this.order.addons = []
    }

    this.order.addons.push(new Addons(
      this.addon.name,
      this.addon.value,
      this.addon.amount
    ))
    this.addon = {}
  }

  typeOrder(type: string) {
    this.type = type
  }
  onSubmit() {
    let order;
    if (this.id === 'new') {
      if (this.type === 'mesa') {
        this.order.address = null
      } else {
        this.order.table = null
      }
      order = new Order(
        this.order.table,
        this.order.address,
        this.order.plates,
        this.order.addons,
        this.user.email
      )
    } else {
      order = this.order
    }
    this.orderService.saveOrder(order).then((...res) => {
      console.log(res)
    })

    this.order = {}
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

  removePlate(i) {
    this.order.plates.splice(i, 1)
  }

  removeAddon(i) {
    this.order.addons.splice(i, 1)
  }

}
