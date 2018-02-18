import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CamProvider } from '../../providers/cam/cam';
import { ReportUserPage } from '../report-user/report-user';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})

export class PersonInfoPage {
  person;
  picURL;
  obj;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _camProvider: CamProvider,
    private calendar: Calendar) {
    this.person = this.navParams.get('person');
    this._camProvider.getPicture(this.person.uid).then(res => this.picURL = res).catch(() => this.picURL = "https://i.imgur.com/5RAenOq.png");
  }

  goToReportpage() {
    this.obj = { ReportUser: this.person };
    this.navCtrl.push(ReportUserPage, this.obj);
  }

}