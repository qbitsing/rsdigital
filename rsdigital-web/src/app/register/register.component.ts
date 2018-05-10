import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string
  public password: string
  public rol = 'cliente'
  constructor(private loginService: OrderService, private route: Router) { }

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
    this.route.navigate(['login'])
  }

}
