import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-sponsor',
  templateUrl: 'sponsor.html',
})
export class SponsorPage {
  techSponsors;
  travelSponsors;
  sponsors;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public fireDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.fireDB.list('/sponsor/sponsors').valueChanges().subscribe(res => {
      this.sponsors = res;
    }).unsubscribe;
    this.fireDB.list('/sponsor/tech').valueChanges().subscribe(res => {
      this.techSponsors = res;
    }).unsubscribe;
    this.fireDB.list('/sponsor/travel').valueChanges().subscribe(res => {
      this.travelSponsors = res;
    }).unsubscribe;
  }

}
