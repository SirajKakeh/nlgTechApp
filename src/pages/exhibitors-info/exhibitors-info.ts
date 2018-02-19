import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-exhibitors-info',
  templateUrl: 'exhibitors-info.html',
})
export class ExhibitorsInfoPage {
  info;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.info = this.navParams.get('exhibitorInfo');
  }

}
