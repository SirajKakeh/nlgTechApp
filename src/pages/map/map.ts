import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  wifiVal;
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  options: GeolocationOptions;
  currentPos: Geoposition;

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps,
    private platform: Platform,
    public navParams: NavParams,
    public fireDB: AngularFireDatabase) {
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
    this.fireDB.list('/wifi').valueChanges().subscribe(res => {
      this.wifiVal = res;
    });
  }

  loadMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: { lat: 31.97175, lng: 35.8320335 },
    });

    var marker = new google.maps.Marker({
      position: { lat: 31.97175, lng: 35.8320335 },
      map: this.map,
      title: "King Hussein Business Park Auditorium and Conference Center"
    });
  }
}
