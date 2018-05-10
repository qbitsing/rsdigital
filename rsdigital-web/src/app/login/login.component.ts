import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string
  public password: string
  constructor(private loginService: OrderService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.email || !this.password) { return null }

    this.loginService.login(this.email)
      .valueChanges().subscribe((user: any) => {
        if (user && user.password === this.password) {
          const session = JSON.stringify(user)
          window.localStorage.setItem('session', session)
          this.route.navigate(['order/list'])
        } else {
          alert('Datos incorrectos')
        }
    })
  }

}
