import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExhibitorsInfoPage } from '../exhibitors-info/exhibitors-info';

@Component({
  selector: 'page-exhibitors',
  templateUrl: 'exhibitors.html',
})
export class ExhibitorsPage {
  exhibitors;
  exhibitor
  @ViewChild(Nav) nav: Nav;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fireDB: AngularFireDatabase,
  ) {
  }

  ionViewDidLoad() {
    this.fireDB.list('/exhibitor').valueChanges().subscribe(res => {
      this.exhibitors = res;
    });
  }

  goToInfo(exhibitor) {
    this.navCtrl.push(ExhibitorsInfoPage, { exhibitorInfo: exhibitor });
  }

}
