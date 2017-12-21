import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';
import { Subscription } from 'rxjs/Subscription';
import { PersonInfoPage } from '../person-info/person-info';


@Component({
  selector: 'page-attendees',
  templateUrl: 'attendees.html',
})
export class AttendeesPage {

  private usersObservable: Subscription;
  users = [];
  filteredUsers = [];
  searchQuery = '';

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private _authProvider: AuthProvider,
    private _usersProvider: UsersProvider
  ) {
    this.getUsers();
  }

  filterUsers() {
    if(this.searchQuery!='') {
      this.filteredUsers = this.users.filter(query => query.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) || query.lastName.includes(this.searchQuery.toLowerCase()));
    this.sortUsers();      
    } else {
      this.filteredUsers = this.users;
    this.sortUsers();      
    }
  }

  sortUsers() {
    this.users = this.users.sort((a,b) => b.firstName - a.firstName);
    this.filteredUsers = this.filteredUsers.sort((a,b) => b.firstName - a.firstName);
    console.log("users", this.users.map(user => user.firstName));
    console.log("filtered", this.filteredUsers.map(user => user.firstName));
  }

  getUsers() {
    this.usersObservable = this. _usersProvider.getAttendees().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
   });
  }

  showPerson(person) {
    this.navCtrl.push(PersonInfoPage, {person: person});
  }
  
  ionViewWillLeave() {
    if(!!this.usersObservable) {
      this.usersObservable.unsubscribe();
    }
  }
}
