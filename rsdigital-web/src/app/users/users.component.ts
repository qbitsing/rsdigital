import { Component, OnInit, ViewChild } from '@angular/core'
import { OrderService } from '../services/order.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = []

  constructor(private userService: OrderService) { }

  ngOnInit() {
    this.userService.users()
      .valueChanges().subscribe(users => {
        this.users = users
      })
  }

  saveuser(user) {
    this.userService.register(user)
  }
}
