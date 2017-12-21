import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  editProfile;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public FirDB:AngularFireDatabase,
              private _authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  // editProfileInfo(){
  //   let uid = this._authProvider.getUserAuth().uid;
  //   this.FirDB.database.ref('users/'+uid).update(this.editProfile);
  //   console.log(this.editProfile)
  // }
}
