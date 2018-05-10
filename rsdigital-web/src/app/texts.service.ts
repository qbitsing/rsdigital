import { Injectable } from '@angular/core';

@Injectable()
export class TextsService {
  public text = {}
  constructor() {
    this.text['Espanol'] = {
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
        addons: 'Adicionales'
      }
    }
    this.text['Ingles'] = {
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
        addons: 'Addons'
      }
    }
  }

  getTexts(): any {
    return this.text
  }

}
