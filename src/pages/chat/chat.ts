import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { UserchatPage } from '../userchat/userchat'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  users = [];
  searchResults = [];
  currentUser;
  noMatch;
  searchPhrase;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _chatProvider: ChatProvider,
    public zone: NgZone,
    public events: Events) {
    this.getUsers();
    this.currentUser = this._chatProvider.currentUserId;
    this.events.subscribe('newmessage_received', () => {
      this.zone.run(()=>{
        this.getUsers();
      })

    });
  }

  getUsers() {
    this.searchResults = this.users = this._chatProvider.users;
    this.users.sort((a, b)=>{
      if (a.lastMessage > b.lastMessage)
        return -1;
      if (a.lastMessage < b.lastMessage)
        return 1;
      return 0;    
    })
  }

  findUsers(ev) {
    this.searchPhrase = ev.target.value;
    var query = ev.target.value ? ev.target.value.toLowerCase() : '';
    var keys = ['firstName', 'lastName'];    

    if (query && query.trim() != '') {
      this.users = this.searchResults.filter((item) => {
        return keys.some(key =>
          String(item[key]).toLowerCase().includes(query));
      });
    } else {
      this.getUsers();
    }
    this.noMatch = this.users.length == 0 && query;    
  }

  initChat(person) {
    this._chatProvider.clearNewMsg(person.uid);
    this._chatProvider.initializeChat(person);
    this.navCtrl.push(UserchatPage);
  }
}
