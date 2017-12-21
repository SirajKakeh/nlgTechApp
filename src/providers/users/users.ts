import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsersProvider {

  constructor(
    private _angularFireDatabase: AngularFireDatabase) {
    }
  
  getAttendees() {
    return this._angularFireDatabase.list('users').valueChanges();
  }

  // getUsername(email) {
  //   let user;
  //   this._angularFireDatabase.list('/users').valueChanges().subscribe( data => {
  //     user = data.filter(user => user.email === email)[0];
  //     return user.firstName + ' ' + user.lastName;
  //   })
  // }
}
