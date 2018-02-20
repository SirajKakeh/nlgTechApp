import { Injectable } from '@angular/core'; ``
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthProvider {
  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFireDatabase: AngularFireDatabase) {
  }

  registerUser(email, password) {
    return this._angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  getUserAuth() {
    return this._angularFireAuth.auth.currentUser;
  }

  getCurrentUid() {
    return this._angularFireAuth.auth.currentUser.uid;
  }

  updateUserInfo(profile, uid) {
    return this._angularFireDatabase.database.ref('users/' + uid).set(profile);
  }

  setProfPicURL(url, uid) {
    return this._angularFireDatabase.database.ref(`users/${uid}`).update({"picUrl": url});
  }

  login(email, password) {
    return this._angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signout() {
    return this._angularFireAuth.auth.signOut();
  }

}
