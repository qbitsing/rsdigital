import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component'
import { CreateOrderComponent } from './create-order/create-order.component'
import { OrderAllComponent } from './order-all/order-all.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: OrderListComponent, pathMatch: 'full' },
  { path: 'order/list', component: OrderListComponent },
  { path: 'order/all', component: OrderAllComponent },
  { path: 'order/:id', component: CreateOrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
