import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { AuthProvider } from '../../providers/auth/auth';
import { RegProfilePage } from '../reg-profile/reg-profile';
import { PincodeController } from 'ionic2-pincode-input/dist/pincode';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  email;
  password;
  passwordConfirmation;
  code;
  constructor(
    private navCtrl: NavController,
    private authProvider: AuthProvider,
    public pincodeCtrl: PincodeController,
    private toastCtrl: ToastController
  ) {
  }

  goToSignin() {
    this.navCtrl.push(SigninPage, {hasPinCode: true})
  }

  signup() {
    console.log(`${this.password} = ${this.passwordConfirmation}`)
    if(this.password === this.passwordConfirmation) {
      this.authProvider.registerUser(this.email, this.password).then(() => this.navCtrl.setRoot(RegProfilePage)).catch(err => {
        this.toastCtrl.create({
          message: err.message,
          duration: 6000
        }).present();
      });  
    } else {
      this.toastCtrl.create({
        message: "password and confirmation don't match, please try again",
        duration: 4000
      }).present();
    }
  }

}
