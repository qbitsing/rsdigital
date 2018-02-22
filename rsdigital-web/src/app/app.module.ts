import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RsdigitalMaterialModule } from './rsdigital-material/rsdigital-material.module'
import { MomentModule } from 'angular2-moment'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { OrderListComponent } from './order-list/order-list.component'
import { CreateOrderComponent } from './create-order/create-order.component'
import { TobrPipe } from './pipes/tobr.pipe';
import { AppRoutingModule } from './app-routing.module'
import { OrderService } from './services/order.service'

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

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
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
