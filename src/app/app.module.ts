import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


import {MapPage} from '../pages/map/map'
import { MyApp } from './app.component';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { SignupPage } from "../pages/signup/signup";
import { SigninPage } from "../pages/signin/signin";
import { AgendaPage } from '../pages/agenda/agenda';
import { AboutPage } from '../pages/about/about';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { Pro } from '@ionic/pro';
import { AuthProvider } from '../providers/auth/auth';
import { ProfilePage } from '../pages/profile/profile';
import { AttendeesPage } from '../pages/attendees/attendees';
import { UsersProvider } from '../providers/users/users';
import { PersonInfoPage } from '../pages/person-info/person-info';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AuthData } from '../providers/auth-data/auth-data';

const IonicPro = Pro.init('ac56531e', {
  appVersion: "0.0.1"
});

var firebaseConfig = {
  apiKey: "AIzaSyBp9MJ8dQnen3MIl9n-U8z35xSkaqr3xHQ",
  authDomain: "nlg-dev.firebaseapp.com",
  databaseURL: "https://nlg-dev.firebaseio.com",
  projectId: "nlg-dev",
  storageBucket: "nlg-dev.appspot.com",
  messagingSenderId: "736492675148"
};

@NgModule({
  declarations: [
    MyApp,
    SplashScreenPage,
    SignupPage,
    SigninPage,
    MapPage,
    AgendaPage,
    AboutPage,
    SpeakersPage,
    SponsorPage,
    ProfilePage,
    AttendeesPage,
    PersonInfoPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashScreenPage,
    SignupPage,
    SigninPage,
    MapPage,
    AgendaPage,
    AboutPage,
    SpeakersPage,
    SponsorPage,
    ProfilePage,
    AttendeesPage,
    PersonInfoPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    UsersProvider,
    AuthProvider,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData
  ]
})
export class AppModule {}
