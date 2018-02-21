import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Injectable()
export class ChatProvider {
	firechats = firebase.database().ref('/chats');
	fbUsers = firebase.database().ref('/users');
	friend: any;
	picUrl;
	public currentUserId = '';
	friendmessages = [];
	users = [];
	constructor(public events: Events,
		private localNotifications: LocalNotifications,
		public plt: Platform) {
		this.currentUserId = firebase.auth().currentUser.uid;
		firebase.database().ref('users').on('value', (snapshot)=>{
			let temp = snapshot.val();
			for(var tempkey in temp){
				if(temp[tempkey].uid != this.currentUserId){
					temp[tempkey].lastMessage = 0;
					this.users.push(temp[tempkey]);
				}
			}
		});
	}

	initializeChat(friend) {
		this.friend = friend;
		firebase.database().ref('/users/' + firebase.auth().currentUser.uid).on('value', (snapshot) => {
			this.picUrl = snapshot.val().picUrl;
		});
	}

	addnewmessage(msg) {
		if (this.friend) {
			return this.firechats.child(firebase.auth().currentUser.uid).child(this.friend.uid).push({
				sentby: firebase.auth().currentUser.uid,
				message: msg,
				timestamp: firebase.database.ServerValue.TIMESTAMP
			}).then(() => {
				this.firechats.child(this.friend.uid).child(firebase.auth().currentUser.uid).push({
					sentby: firebase.auth().currentUser.uid,
					message: msg,
					timestamp: firebase.database.ServerValue.TIMESTAMP
				})
			})
		}
	}

	getmessages() {
		let temp;
		let lastMessageKey;
		this.firechats.child(firebase.auth().currentUser.uid).child(this.friend.uid).once('value', (snapshot) => {
			this.friendmessages = [];
			temp = snapshot.val();
			for (var tempkey in temp) {
				this.friendmessages.push(temp[tempkey]);
				lastMessageKey = tempkey;
			}
			this.events.publish('newmessage');
		}).then(() => {
			this.firechats.child(firebase.auth().currentUser.uid).child(this.friend.uid).limitToLast(1).on('child_added', (snapshot) => {
				temp = snapshot.val();
				if(lastMessageKey != snapshot.key){
					this.friendmessages.push(temp);
				}
			})
		})
	}

	alertNewMessages() {
		let temp;
		let usersIds;
		let start = Date.now();
		//get initial list of ids for current user's chats
		this.firechats.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
			if (snapshot.val()) {
				usersIds = Object.keys(snapshot.val());
				for (let id of usersIds) {
					this.firechats.child(firebase.auth().currentUser.uid).child(id).limitToLast(1).on('child_added', (snapshot) => {
						let user;
						temp = snapshot.val();
						this.fbUsers.child(temp.sentby).once('value', (snap) => {
							user = snap.val();
						}).then(() => {
							if (temp.sentby == id && temp.timestamp > start) {
								this.events.publish('newmessage_received', temp.sentby);
								this.users.forEach(user=>{
						          if(user.uid == temp.sentby){
						            user.newmsg = true;
						            user.lastMessage = temp.timestamp; 
						          }
						        });
								this.localNotifications.schedule({
									id: temp.sentby,
									title: 'New message:',
									text: user.firstName + ': ' + temp.message,
									sound: this.plt.is('android') ? 'file://sound.mp3' : 'file://beep.caf'
								});
							}
						});
					});
				}
			}
		}).then(() => {
			//watch for new chats with users
			this.firechats.child(firebase.auth().currentUser.uid).on('child_added', (snapshot) => {
				let newId = snapshot.key;
				let snap = snapshot.val()
				let snapId = Object.keys(snap)[0];
				let notification: any;
				if (snap[snapId].timestamp > start) {
					this.firechats.child(firebase.auth().currentUser.uid).child(newId).limitToLast(1).on('child_added', (snapshot) => {
						let user;
						temp = snapshot.val();
						this.fbUsers.child(newId).once('value', (snap) => {
							user = snap.val();
							notification = {
									id: newId,
									title: 'New message:',
									text: user.firstName + ': ' + temp.message,
									sound: this.plt.is('android') ? 'file://sound.mp3' : 'file://beep.caf'
								}
						}).then(() => {
							if (temp.sentby == newId && temp.timestamp > start) {
								this.events.publish('newmessage_received', newId);
								this.users.forEach(user=>{
						          if(user.uid == newId){
						            user.newmsg = true;
						            user.lastMessage = temp.timestamp;
						          }
						        });
								this.localNotifications.schedule(notification);
							}
						});
					});
				}
			});
		})
	}

	clearNewMsg(uid){
		this.users.forEach((user)=>{
			if(user.uid == uid){
				return user.newmsg = false;
			}
		})
	}
}