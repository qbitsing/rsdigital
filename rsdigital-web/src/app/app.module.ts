import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RsdigitalMaterialModule } from './rsdigital-material/rsdigital-material.module';

import { AppComponent } from './app.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    RsdigitalMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
