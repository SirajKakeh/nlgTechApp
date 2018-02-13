import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AuthProvider } from '../../providers/auth/auth';
import { AgendaPage } from '../agenda/agenda';
import { SignupPage } from '../signup/signup';
import { PinCodePage } from '../pin-code/pin-code';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  email;
  password;
  uid;
  hasPinCode;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB: AngularFireDatabase,
    private toastCtrl: ToastController,
    public authProvider: AuthProvider) {
    this.hasPinCode = this.navParams.get('hasPinCode');
  }

  ionViewDidLoad() {

  }

  signin() {
    this.authProvider.login(this.email, this.password).then(() => this.navCtrl.setRoot(AgendaPage)).catch(err => {
      this.toastCtrl.create({
        message: err.message,
        duration: 6000
      }).present();
    });
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }

  goToPinCode() {
    this.navCtrl.setRoot(PinCodePage);
  }
}
