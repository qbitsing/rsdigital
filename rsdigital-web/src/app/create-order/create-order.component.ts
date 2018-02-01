import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public plates: Array<Object>;
  public order: any;
  constructor() { 
    this.plates = [
      { name: 'Carne', available: true },
      { name: 'Pernil', available: true },
      { name: 'Pechuga', available: true },
      { name: 'Lomito de Mojarra', available: true },
      { name: 'Milanesa de Pollo', available: true },
      { name: 'Lomo de Cerdo', available: true },
      { name: 'Robalo', available: true },
      { name: 'Menu de Robalo', available: false },
      { name: 'Trucha', available: true },
      { name: 'Menu de Trucha', available: true },
      { name: 'Mojarra', available: true },
      { name: 'Bagre', available: true }
    ];
    this.order = { 
      plates: []
    };
  }

  ngOnInit() {
  }

  onSubmit(order: NgForm) {
    this.order.table = order.value.table;
    this.order.plates.push({
      amount: order.value.amount,
      type: '',
      name: order.value.plate,
      description: order.value.description
    });
    console.log(this.order);
  }

}
