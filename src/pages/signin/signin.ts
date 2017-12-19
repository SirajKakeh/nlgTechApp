import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AuthProvider } from '../../providers/auth/auth';
import { AttendeesPage } from '../attendees/attendees';
import { AgendaPage } from '../agenda/agenda';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  email;
  password;
  uid;
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB:AngularFireDatabase,
    public authProvider:AuthProvider){
      this.email = 'ss@s.com';
      this.password = '00000000';
  }
  
  signin() {
    this.authProvider.login(this.email, this.password).then(() => this.navCtrl.setRoot(AgendaPage)).catch(function(error) {
      console.error(error);
    });
  }

  goToResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
}
