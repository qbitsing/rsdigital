import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database/database'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class LoginService {

  constructor(private db: AngularFireDatabase) { }

  public login(email) {
    return this.db.object(`users/${email}`)
  }

}
