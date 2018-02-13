import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { PincodeController } from 'ionic2-pincode-input';
import firebase from 'firebase';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import { AuthProvider } from '../../providers/auth/auth';
import { AgendaPage } from '../agenda/agenda';

@Component({
  selector: 'page-pin-code',
  templateUrl: 'pin-code.html',
})

export class PinCodePage {

  constructor(
    public navCtrl: NavController,
    private fireDB: AngularFireDatabase,
    public pincodeCtrl: PincodeController,
    private alertCtrl: AlertController,
    private menu: MenuController,
    private _auth: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    this.menu.enable(false, "menu");
    setTimeout(() => this._auth.getUserAuth() ? this.navCtrl.setRoot(AgendaPage) : null, 1000)
  }

  goToSignIn() {
    this.navCtrl.push(SigninPage, { hasPinCode: false });
  }

  openPinCode() {
    let pinCode = this.pincodeCtrl.create({
      title: 'Invitation PIN',
      hideForgotPassword: true,
      hideCancelButton: true,
      passSize: 6,
    });
    pinCode.present();

    pinCode.onDidDismiss((code, status) => {
      if (status === 'done') {
        let user = firebase.database().ref('codes');
        user.once('value', (_snapshot: any) => {
          let flag = false;
          for (var i in _snapshot.val()) {
            if (_snapshot.val()[i].value === code && _snapshot.val()[i].is_active === true) {
              flag = true;
              let ref = this.fireDB.database.ref('codes/' + i);
              if (code !== '090909') {
                ref.update({ is_active: false });
              }
            }
          }
          if (flag) {
            this.navCtrl.setRoot(SignupPage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Invalid code please try it again!',
              buttons: ['OK']
            });
            alert.present();
          }
        })
      }
    })
  }

}
