import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase } from 'angularfire2/database';

import { MapPage } from '../pages/map/map';
import { AgendaPage } from '../pages/agenda/agenda';
import { AboutPage } from '../pages/about/about';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { AttendeesPage } from '../pages/attendees/attendees';
import { AuthProvider } from '../providers/auth/auth';
import { PersonalProfViewPage } from '../pages/personal-prof-view/personal-prof-view';
import { CamProvider } from '../providers/cam/cam';
import { ExhibitorsPage } from '../pages/exhibitors/exhibitors';
import { ChatPage } from '../pages/chat/chat';
import { PinCodePage } from "../pages/pin-code/pin-code";
import { AppTeamPage } from '../pages/app-team/app-team';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage: any = PinCodePage;

  @ViewChild(Nav) nav: Nav;
  userName;
  userEmail;
  usersin;
  profilePicURL;
  newMsg;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private menu: MenuController,
    private _authProvider: AuthProvider,
    public fireDB: AngularFireDatabase,
    public _camProvider: CamProvider,
    public events: Events
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.events.subscribe('newmessage_received', () => {
      this.newMsg = true;
    });
  }

  map() {
    this.menu.close();
    this.nav.push(MapPage);
  }
  agenda() {
    this.menu.close();
    this.nav.push(AgendaPage);
  }
  chat() {
    this.menu.close();
    this.nav.push(ChatPage);
    this.newMsg = false;
  }
  about() {
    this.menu.close();
    this.nav.push(AboutPage);
  }
  speakers() {
    this.menu.close();
    this.nav.push(SpeakersPage);
  }
  sponsor() {
    this.menu.close();
    this.nav.push(SponsorPage);
  }
  signout() {
    this._authProvider.signout()
      .then(() => {
        this.menu.close().then(() => this.nav.setRoot(PinCodePage));
      })
      .catch(console.error);
  }
  profile() {
    this.menu.close();
    this.nav.push(PersonalProfViewPage);
  }
  attendees() {
    this.menu.close();
    this.nav.push(AttendeesPage);
  }
  menuOpened() {
    this._camProvider.getPicture(null).then(res => {
      this.profilePicURL = res;
    });

    this.userEmail = this._authProvider.getUserAuth().email;
    this.fireDB.list('/users').valueChanges().subscribe(data => {
      this.usersin = data.filter(user => {
        if (user['email']) {
          return user['email'] === this.userEmail
        }
      });
      if (this.usersin !== []) {
        this.userName = this.usersin[0].firstName + ' ' + this.usersin[0].lastName;
      }
    });
  }
  exhibitors() {
    this.menu.close();
    this.nav.push(ExhibitorsPage);
  }
  team() {
    this.menu.close();
    this.nav.push(AppTeamPage);
  }
}

