import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Console } from '@angular/core/src/console';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  items;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularFireAuth: AngularFireAuth,
              public fireDB:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.fireDB.list('/about').valueChanges().subscribe(res => {
      this.items = res;
      console.log(this.items)
    });
  }

}
