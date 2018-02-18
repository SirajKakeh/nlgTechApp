import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  placeHolder = 'search by name';
  filterCriteria = "name";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usersProvider: UsersProvider
  ) {
    this.getUsers();
  }

  filterUsers() {
    let searchQueryInner = this.searchQuery.toLowerCase();
    let filterCriteriaInner = {
      "name of organization": "organizationName",
      "type of organization": "organizationType",
      "position": "position",
      "country": "country"
    }

    if (searchQueryInner !== '' && this.filterCriteria === 'name') {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(searchQueryInner) ||
        user.lastName.toLowerCase().includes(searchQueryInner));
    } else if (searchQueryInner !== '' && this.filterCriteria !== 'name') {
      this.filteredUsers = this.users.filter(user =>
        user[filterCriteriaInner[this.filterCriteria]].toLowerCase().includes(searchQueryInner))
    } else {
      this.filteredUsers = this.users;
    }
  }

  setFilterCriteria() {
    this.placeHolder = `search by ${this.filterCriteria}`;
  }

  getUsers() {
    this.usersObservable = this._usersProvider.getAttendees().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  showPerson(person) {
    this.navCtrl.push(PersonInfoPage, { person: person });
  }

  ionViewWillLeave() {
    if (!!this.usersObservable) {
      this.usersObservable.unsubscribe();
    }
  }
}
