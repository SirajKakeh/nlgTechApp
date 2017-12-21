import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
import { firestore } from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { AuthProvider } from '../../providers/auth/auth';
import { PersonInfoPage } from '../person-info/person-info';
import { AttendeesPage } from '../attendees/attendees';
import { AgendaPage } from '../agenda/agenda';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  email;
  password;
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private angularFireAuth: AngularFireAuth, 
    private fireDB:AngularFireDatabase,
    private authProvider:AuthProvider
  ) {
    this.email = '@s.com'
    this.password = '00000000';    
  }

  signup() {
    this.authProvider.registerUser(this.email, this.password)
    .then((user) => {
      this.navCtrl.setRoot(PersonInfoPage);
    }).catch(console.error);
  }

  goToSignin() {
    this.navCtrl.push(SigninPage)
  }
   
  ionViewDidLoad() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.navCtrl.setRoot(AgendaPage)
             
      }
    })     
  }


}
