import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Console } from '@angular/core/src/console';

/**
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {
  
  speakerList
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularFireAuth: AngularFireAuth,
              public fireDB:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
    this.fireDB.list('/speakers').valueChanges().subscribe(res => {
      this.speakerList = res;
      console.log(this.speakerList)
    });
  }

}
