import { Component, ViewChild } from '@angular/core';
import { NavController,Nav, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EditprofilePage } from '../editprofile/editprofile';
import { AboutPage } from'../about/about'
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userEmail;
  usersin;
  user;
  userName;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _authProvider: AuthProvider,
              public fireDB:AngularFireDatabase) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.userEmail = this._authProvider.getUserAuth().email;
     this.fireDB.list('/users').valueChanges().subscribe( data => {
        this.usersin = data.filter(user => {
          console.log(user);
          // return true;
          return user.email === this.userEmail
        });
        if(this.usersin!==[]) {
          this.userName = this.usersin[0].firstName + ' ' + this.usersin[0].lastName;
        }
        console.log(this.usersin);        
      });
  }

  editProfile(){
    console.log("dddddddddddddddd")
    this.navCtrl.push(EditprofilePage);
  }
}
