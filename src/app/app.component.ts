import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import {MapPage} from '../pages/map/map';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { AgendaPage } from '../pages/agenda/agenda';
import { AboutPage } from '../pages/about/about';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { AttendeesPage } from '../pages/attendees/attendees';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AuthProvider } from '../providers/auth/auth';
import { ProfilePage } from '../pages/profile/profile';
import firebase from 'firebase';
import { EditprofilePage } from '../pages/editprofile/editprofile';

@Component({
  templateUrl: 'app.html'
})


  // rootPage:any =AgendaPage;
  rootPage:any = SignupPage ;
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
      setTimeout(() => {
        console.log(this._authProvider.getUserAuth());
        this.userEmail = this._authProvider.getUserAuth().email;
        this.fireDB.list('/users').valueChanges().subscribe( data => {
          this.usersin = data.filter(user => {
            console.log(user);
            // return true;
            return user.email === this.userEmail
          });
          if(this.usersin!==[]) {
            this.userName = this.usersin[0].firstName + ' ' + this.usersin[0].lastName;
          }
          console.log(this.usersin);        
        });
      }, 2000);
      
    });
  }
 
  map() {
    this.menu.close();
    this.nav.push(MapPage);
  }

  ionViewDidLoad() {

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
    this.nav.push(ProfilePage);

  }
  attendees(){
    this.menu.close();
    this.nav.push(AttendeesPage);
  }
}

