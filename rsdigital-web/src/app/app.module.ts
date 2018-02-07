import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RsdigitalMaterialModule } from './rsdigital-material/rsdigital-material.module'
import { MomentModule } from 'angular2-moment'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { OrderListComponent } from './order-list/order-list.component'
import { CreateOrderComponent } from './create-order/create-order.component'
import { TobrPipe } from './pipes/tobr.pipe'


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrderListComponent,
    CreateOrderComponent,
    TobrPipe
  ],
  imports: [
    BrowserModule,
    RsdigitalMaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
