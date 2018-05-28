import { Component, OnInit, Input } from '@angular/core';
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
  @Input() languaje: string
  public text: any
  constructor(private parent: AppComponent, private loginService: OrderService, private route: Router) { }

  ngOnInit() {
    this.text = {}
    this.text['Español'] = {
      u: 'nombre de usuario',
      c: 'contraseña',
      i: 'Iniciar sesion',
      r: 'Resgistrarse'
    }

    this.text['English'] = {
      u: 'username',
      c: 'password',
      i: 'Log in',
      r: 'Registered'
    }

    this.text['Français'] = {
      u: 'nom d\'utilisateur',
      c: 'mot de passe',
      i: 'Connexion',
      r: 'Enregistré'
    }

    this.text['Italiano'] = {
      u: 'username',
      c: 'password',
      i: 'Accedi',
      r: 'Registrato'
    }
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
