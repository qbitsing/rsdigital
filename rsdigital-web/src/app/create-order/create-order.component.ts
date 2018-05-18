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
  @Input() languaje: string
  public texts = {}
  public user: any
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.plates = [
      { value: 8000, name: this.setTowNames('carne', 'meat', 'viande', 'carne'), available: true },
      { value: 8000, name: this.setTowNames('Pernil', 'Chicken leg', 'Pernil' , 'prosciutto'), available: true },
      { value: 8000, name: this.setTowNames('Pechuga', 'Breast', 'Sein', 'seno'), available: true },
      // tslint:disable-next-line:max-line-length
      { value: 8000, name: this.setTowNames('Lomito de Mojarra', 'Lomito de Mojarra', 'Lomito de Mojarra', 'Lomito de Mojarra'), available: true },
      // tslint:disable-next-line:max-line-length
      { value: 8000, name: this.setTowNames('Milanesa de Pollo', 'Chicken Milanese', 'Poulet Milanesa', 'Pollo alla milanese'), available: true },
      { value: 10000, name: this.setTowNames('Lomo de Cerdo', 'Pork Loin', 'Longe de porc', 'Lonza di maiale'), available: true },
      { value: 15000, name: this.setTowNames('Robalo', 'Bass', 'Snook', 'spigola'), available: true },
      { value: 12000, name: this.setTowNames('Menu de Robalo', 'Bass Menu', 'Le menu de Robalo', 'Il menu di Robalo'), available: true },
      { value: 17000, name: this.setTowNames('Trucha', 'Trout', 'Truite', 'trota'), available: true },
      { value: 12000, name: this.setTowNames('Menu de Trucha', 'Trout Menu', 'Menu de la truite', 'Menu trota'), available: true },
      { value: 15000, name: this.setTowNames('Mojarra', 'Mojarra', 'Mojarra', 'Mojarra'), available: true },
      { value: 15000, name: this.setTowNames('Bagre', 'Catfish', 'Silure', 'pesce gatto'), available: true }
    ]
  }

  setTowNames(nameone, nametow, namethree?, namefour?) {
    const names = {}

    names['Español'] = nameone
    names['English'] = nametow
    names['Français'] = nametow
    names['Italiano'] = nametow

    return names
  }

  ngOnInit() {
    this.user = this.orderService.getUser() || {}
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
    this.texts['English'] = {
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

    this.texts['Français'] = {
      createOrder: {
        tablePlaceholder: 'Table',
        amountPlaceholder: 'Montant',
        platePlaceholder: 'Plato',
        descriptionPlaceHolder: 'Description',
        addButton: 'Ajouter',
        name: 'Nom',
        price: 'Prix',
        create: 'Créer une commande',
        list: 'Liste',
        addons: 'Additional',
        removeButton: 'Supprimer',
        address: 'Adresse'
      }
    }

    this.texts['Italiano'] = {
      createOrder: {
        tablePlaceholder: 'Table',
        amountPlaceholder: 'Amount',
        platePlaceholder: 'Plato',
        descriptionPlaceHolder: 'Descrizione',
        addButton: 'Aggiungi',
        name: 'Nome',
        price: 'Prezzo',
        create: 'Crea ordine',
        list: 'Lista',
        addons: 'Additional',
        removeButton: 'Elimina',
        address: 'Indirizzo'
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

  removePlate(i) {
    this.order.plates.splice(i, 1)
  }

  removeAddon(i) {
    this.order.addons.splice(i, 1)
  }

}
