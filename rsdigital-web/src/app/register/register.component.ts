import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string
  public password: string
  public rol = 'cliente'
  @Input() languaje: string
  constructor(private parent: AppComponent, private loginService: OrderService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.email || !this.password) { return null }
    const user = {
      email: this.email,
      password: this.password,
      rol: this.rol
    }

    this.loginService.register(user)
    this.rute('/login')
  }

  rute(str) {
    this.parent.ruta = str
  }

}
