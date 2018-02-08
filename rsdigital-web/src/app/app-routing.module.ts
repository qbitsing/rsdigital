import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component'
import { CreateOrderComponent } from './create-order/create-order.component'

const routes: Routes = [
  { path: '', component: OrderListComponent, pathMatch: 'full'},
  { path: 'order/list', component: OrderListComponent},
  { path: 'order/:id', component: CreateOrderComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
