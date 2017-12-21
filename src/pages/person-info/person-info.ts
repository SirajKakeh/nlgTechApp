import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {  
  profile = {};
  userEmail;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider) {
    }

  updateProfile() {
    let uid = this._authProvider.getUserAuth().uid;
    this.userEmail = this._authProvider.getUserAuth().email;
    this.profile["email"] = this.userEmail;
    this.profile["uid"] = uid;
    this._authProvider.updateUserInfo(this.profile, uid)
      .then(() => this.navCtrl.setRoot(AttendeesPage))
      .catch(console.error);
  }
}
