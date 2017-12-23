import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import {MapPage} from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { AgendaPage } from '../pages/agenda/agenda';
import { AboutPage } from '../pages/about/about';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { AttendeesPage } from '../pages/attendees/attendees';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AuthProvider } from '../providers/auth/auth';
import firebase from 'firebase';
import { RegProfilePage } from '../pages/reg-profile/reg-profile';
import { PersonalProfViewPage } from '../pages/personal-prof-view/personal-prof-view';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  // rootPage:any = AgendaPage;
  rootPage:any = SigninPage;
  @ViewChild(Nav) nav: Nav;
  userName;
  userEmail;
  usersin;
  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private angularFireAuth: AngularFireAuth, 
    private menu: MenuController,
    private _authProvider: AuthProvider,
    public fireDB :AngularFireDatabase
    ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      try {
        setTimeout(() => {
          this.userEmail = this._authProvider.getUserAuth().email;
          this.fireDB.list('/users').valueChanges().subscribe( data => {
            this.usersin = data.filter(user => {
              if(user['email']) {
                return user['email'] === this.userEmail
              }
            });
            if(this.usersin!==[]) {
              this.userName = this.usersin[0].firstName + ' ' + this.usersin[0].lastName;
            }
          });
        }, 2000);
      }
      catch(err) {
        console.error(err);
      }
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
        this.nav.setRoot(SigninPage);
        this.menu.close();
      })
      .catch(console.error);
  }
  profile(){
    this.menu.close();
    this.nav.push(PersonalProfViewPage);
  }
  attendees(){
    this.menu.close();
    this.nav.push(AttendeesPage);
  }
}

