import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string
  public password: string
  constructor(private parent: AppComponent, private loginService: OrderService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.email || !this.password) { return null }

    this.loginService.login(this.email)
      .valueChanges().subscribe((user: any) => {
        if (user && user.password === this.password) {
          this.loginService.setUser(user)
          this.parent.user = user
          this.rute('/order/list')
        } else {
          alert('Datos incorrectos')
        }
    })
  }

  rute(str) {
    this.parent.ruta = str
  }

}
