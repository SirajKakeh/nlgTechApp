import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, LoadingController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';

@Component({
  selector: 'page-userchat',
  templateUrl: 'userchat.html',
})

export class UserchatPage {
  @ViewChild('content') content: Content;
  friend: any;
  picUrl;
  newmessage;
  allmessages = [];
  imgornot;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatservice: ChatProvider,
    public events: Events,
    public zone: NgZone,
    public loadingCtrl: LoadingController) {
    this.friend = this.chatservice.friend;
    this.picUrl = this.chatservice.picUrl;
    this.scrollto();
    this.events.subscribe('newmessage', () => {
      this.allmessages = [];
      this.imgornot = [];
      this.zone.run(() => {
        this.allmessages = this.chatservice.friendmessages;
        for (var key in this.allmessages) {
          if (this.allmessages[key].message.substring(0, 4) == 'http')
            this.imgornot.push(true);
          else
            this.imgornot.push(false);
        }
      })
    })
  }

  addmessage() {
    if (this.newmessage != '') {
      this.chatservice.addnewmessage(this.newmessage).then(() => {
        this.content.scrollToBottom();
        this.newmessage = '';
      });
    }
  }

  ionViewDidEnter() {
    this.chatservice.getmessages();
  }

  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
  }

}