webpackJsonp([1],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalProfViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_profile_update_profile__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cam_cam__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalProfViewPage = (function () {
    function PersonalProfViewPage(navCtrl, navParams, _authProvider, fireDB, _camProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._authProvider = _authProvider;
        this.fireDB = fireDB;
        this._camProvider = _camProvider;
    }
    PersonalProfViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userEmail = this._authProvider.getUserAuth().email;
        this.fireDB.list('/users').valueChanges().subscribe(function (data) {
            _this.userInfo = data.filter(function (user) {
                return user['email'] === _this.userEmail;
            })[0];
            if (_this.userInfo !== []) {
                _this.userName = _this.userInfo.firstName + ' ' + _this.userInfo.lastName;
            }
        });
        this._camProvider.getPicture(null).then(function (res) { return _this.profilePicURL = res; });
    };
    PersonalProfViewPage.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__update_profile_update_profile__["a" /* UpdateProfilePage */], { user: this.userInfo });
    };
    PersonalProfViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-prof-view',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/personal-prof-view/personal-prof-view.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title *ngIf="userName">\n      Your Personal Profile\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="width:100%; height: 35%px; background-color:#00bfbb; size:100%;">\n    <img id="profImg" [src]="profilePicURL" align="middle"/>\n    <h2 *ngIf="userName" style="text-align:center;">\n      {{userName}}\n    </h2>\n    <h6 style="text-align: center;">{{userEmail}}</h6>\n    <br style="background-color:#00bfbb;">\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="editProfile()" id="fabButt" color="nlgen">\n      <ion-icon large name="more"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/personal-prof-view/personal-prof-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cam_cam__["a" /* CamProvider */]])
    ], PersonalProfViewPage);
    return PersonalProfViewPage;
}());

//# sourceMappingURL=personal-prof-view.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reg_profile_reg_profile__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_pincode_input_dist_pincode__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, authProvider, pincodeCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.pincodeCtrl = pincodeCtrl;
        this.toastCtrl = toastCtrl;
    }
    SignupPage.prototype.goToSignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */], { hasPinCode: true });
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        console.log(this.password + " = " + this.passwordConfirmation);
        if (this.password === this.passwordConfirmation) {
            this.authProvider.registerUser(this.email, this.password).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__reg_profile_reg_profile__["a" /* RegProfilePage */]); }).catch(function (err) {
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 6000
                }).present();
            });
        }
        else {
            this.toastCtrl.create({
                message: "password and confirmation don't match, please try again",
                duration: 4000
            }).present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/signup/signup.html"*/'<ion-header></ion-header>\n<ion-content>\n  <a href="https://www.nlgedtech.com/" target="blank">\n    <img src="assets/imgs/nlg.png" id="logoImg">\n  </a>\n  <div style=" text-align: center;color:#00bfbb;font-size:110% ;font-weight: bold; margin-top: -50px; margin-bottom:40px">2018 NLG Tech Summit </div>\n  <ion-grid id="grid">\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <div style="color:#00bfbb; font-size: meduim; font-weight: bold;">Sign Up</div>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-input type="email" style="border: 1px solid gray" placeholder="Email Address" [(ngModel)]="email"></ion-input>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top:10px;">\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-input type="Password" style="border: 1px solid gray" placeholder="Password" [(ngModel)]="password"></ion-input>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top:10px;">\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-input type="Password" style="border: 1px solid gray" placeholder="Password confirmation" [(ngModel)]="passwordConfirmation"></ion-input>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top:10px;">\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <button ion-button full (click)="signup()" style="background-color:#00bfbb">Sign Up</button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top:3px">\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <a href="#" (click)="goToSignin()" style="color:#00bfbb">Sign In</a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic2_pincode_input_dist_pincode__["a" /* PincodeController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agenda_agenda__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pin_code_pin_code__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, angularFireAuth, fireDB, toastCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.fireDB = fireDB;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.hasPinCode = this.navParams.get('hasPinCode');
    }
    SigninPage.prototype.ionViewDidLoad = function () {
    };
    SigninPage.prototype.signin = function () {
        var _this = this;
        this.authProvider.login(this.email, this.password).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__agenda_agenda__["a" /* AgendaPage */]); }).catch(function (err) {
            _this.toastCtrl.create({
                message: err.message,
                duration: 6000
            }).present();
        });
    };
    SigninPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    SigninPage.prototype.goToPinCode = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pin_code_pin_code__["a" /* PinCodePage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/signin/signin.html"*/'<ion-header></ion-header>\n<ion-content padding>\n  <a href="https://www.nlgedtech.com/" target="blank">\n    <img src="assets/imgs/nlg.png" id="logoImg">\n  </a>\n  <div style=" text-align: center;color:#00bfbb;font-size:110% ;font-weight: bold; margin-top: -50px; margin-bottom:40px">2018 NLG Tech Summit </div>\n\n  <ion-grid id="grid">\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <div style="color:#00bfbb; font-size: meduim; font-weight: bold;">\n          Sign In\n        </div>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <form (ngSubmit)="signin()">\n          <ion-input type="email" style="border: 1px solid gray" placeholder="Email Address" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n        </form>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top:10px;">\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <form (ngSubmit)="signin()">\n          <ion-input type="Password" style="border: 1px solid gray" placeholder="Password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n        </form>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row style="padding-top:3px">\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <button ion-button full (click)="signin()" style="background-color:#00bfbb">Sign In</button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <!-- <ion-col col-6 *ngIf="hasPinCode">\n        Don\'t have an account?\n        <a href="#" id="signupLink" (click)="goToSignup()">\n          Sign up\n        </a>\n      </ion-col> -->\n      <ion-col col-6>\n        <a href="#" id="resetPassLink" (click)="goToResetPassword()">\n          Reset Password\n        </a>\n      </ion-col>\n      <ion-col col-4 style="text-align:center">\n        <a href="#" (click)="goToPinCode()" style="color:#00bfbb">Don\'t have an account?\n          <span style="font-weight: bold;"> Enter your pincode</span>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatProvider = (function () {
    function ChatProvider(events) {
        this.events = events;
        this.firechats = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/chats');
        this.friendmessages = [];
    }
    ChatProvider.prototype.initializeChat = function (friend) {
        this.friend = friend;
    };
    ChatProvider.prototype.addnewmessage = function (msg) {
        var _this = this;
        if (this.friend) {
            return this.firechats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.friend.uid).push({
                sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                message: msg,
                timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
            }).then(function () {
                _this.firechats.child(_this.friend.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).push({
                    sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                    message: msg,
                    timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                });
            });
        }
    };
    ChatProvider.prototype.getmessages = function () {
        var _this = this;
        var temp;
        this.firechats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.friend.uid).on('value', function (snapshot) {
            _this.friendmessages = [];
            temp = snapshot.val();
            for (var tempkey in temp) {
                _this.friendmessages.push(temp[tempkey]);
            }
            _this.events.publish('newmessage');
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/userchat/userchat.module": [
		533,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

"";


var AuthProvider = (function () {
    function AuthProvider(_angularFireAuth, _angularFireDatabase) {
        this._angularFireAuth = _angularFireAuth;
        this._angularFireDatabase = _angularFireDatabase;
    }
    AuthProvider.prototype.registerUser = function (email, password) {
        return this._angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.getUserAuth = function () {
        return this._angularFireAuth.auth.currentUser;
    };
    AuthProvider.prototype.updateUserInfo = function (profile, uid) {
        return this._angularFireDatabase.database.ref('users/' + uid).set(profile);
    };
    AuthProvider.prototype.setProfPicURL = function (url, uid) {
        return this._angularFireDatabase.database.ref("users/" + uid).update({ "picUrl": url });
    };
    AuthProvider.prototype.login = function (email, password) {
        return this._angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signout = function () {
        return this._angularFireAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapPage = (function () {
    // rest;
    function MapPage(navCtrl, geolocation, googleMaps, platform, navParams, fireDB) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.navParams = navParams;
        this.fireDB = fireDB;
    }
    MapPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadMap();
        });
        this.fireDB.list('/wifi').valueChanges().subscribe(function (res) {
            _this.wifiVal = res;
        });
    };
    MapPage.prototype.loadMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 19,
            center: { lat: 31.9696561, lng: 35.8330706 },
        });
        var marker = new google.maps.Marker({
            position: { lat: 31.9696561, lng: 35.8330706 },
            map: this.map,
            title: "King Hussein Business Park Auditorium and Conference Center"
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:#00bfbb;">\n  <hr>\n  <div style="padding-left: 0.4cm; padding-top: 0.1cm; padding-bottom: 0.1cm; background-color:#00bfbb; color:white; font-weight:bold" *ngIf="wifiVal">\n    Wi-fi Name: {{wifiVal[0]}}\n  </div>\n  <div style="padding-left: 0.4cm;padding-top: 0.1cm; padding-bottom: 0.2cm; background-color:#00bfbb; color:white; font-weight:bold" *ngIf="wifiVal">\n    Wi-fi Password: {{wifiVal[1]}}\n  </div>\n\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, angularFireAuth, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.fireDB = fireDB;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireDB.list('/about').valueChanges().subscribe(function (res) { return _this.items = res; });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar color="nlgen">\n    <ion-title>About</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <img align="middle" src="assets/imgs/aboutImg.png" class="aboutImg">\n  <div class="credits">\n    <p>Photo: C.Robbins/Mercy Corps</p>\n  </div>\n  <div>\n    <div>\n    he 2018 No Lost Generation (NLG) Tech Summit is focused on <span> Pillar III of the NLG initiative: Adolescents & Youth.</span> Over one third of Syrian and Iraqi refugees are between 10 and 24 years old - across the region there is an entire generation of young people living through conflict, displacement and the repercussions from these. These young people are critical to building the future of the region, but they need our support to access education, dignified livelihoods, to participate in society and to rebuild their communities.\n    </div>\n    <div>\n    The Summit brings together practitioners, NGOs, UN agencies, technology companies and young people to look at how technology and innovation can best address the challenges faced by young people in accessing education, meaningful employment, positive representation, participation and gender specific issues. \n    </div>\n    <div>\n    No Lost Generation is a multi-agency initiative co-led by \n    <a  href="https://www.unicef.org/" style="color:#00bfbb;">UNICEF</a>,\n      <a href="https://www.mercycorps.org/"style="color:#00bfbb;">Mercy Corps</a>,\n      <a href="https://www.savethechildren.net/" style="color:#00bfbb;">Save the Children</a>, and\n      <a href="https://www.worldvision.org/" style="color:#00bfbb;">World Vision</a>, focused on supporting children and youth affected by the Syria and Iraq conflicts. The initiative brings together over 100 agencies who are working to prevent a lost generation of children and young people in Syria, Iraq, Lebanon, Jordan, Turkey, and Egypt.\n    </div>\n    <div>\n    NLG partners are working to achieve agreed outcomes essential for the education, protection, wellbeing and future of children and these young people. These outcomes fall under three pillars: <span>Education</span>,<span> Child Protection </span>and <span>Adolescents & Youth.</span>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speakers_info_speakers_info__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeakersPage = (function () {
    function SpeakersPage(navCtrl, navParams, angularFireAuth, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.fireDB = fireDB;
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.speakersObservable = this.fireDB.list('/speakers').valueChanges().subscribe(function (res) {
            return _this.speakerList = res;
        });
    };
    SpeakersPage.prototype.goToSpeakerInfo = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__speakers_info_speakers_info__["a" /* SpeakersInfoPage */], { spekerInfo: speaker });
        console.log(speaker);
    };
    SpeakersPage.prototype.ionViewWillLeave = function () {
        if (!!this.speakersObservable) {
            this.speakersObservable.unsubscribe();
        }
    };
    SpeakersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/speakers/speakers.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Speakers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let speaker of speakerList" (click)="goToSpeakerInfo(speaker)">\n      <ion-thumbnail item-start>\n        <img [src]=speaker.img>\n      </ion-thumbnail>\n      <h2>{{speaker.name}}</h2>\n      <p>{{speaker.job}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/speakers/speakers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SpeakersPage);
    return SpeakersPage;
}());

//# sourceMappingURL=speakers.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SpeakersInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpeakersInfoPage = (function () {
    function SpeakersInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakersInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpeakersInfoPage');
        this.SpInfo = this.navParams.get('spekerInfo');
        console.log(this.SpInfo);
    };
    SpeakersInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers-info',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/speakers-info/speakers-info.html"*/'<!--\n  Generated template for the SpeakersInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="nlgen">\n    <ion-title>Speakers Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img *ngIf="SpInfo" id="imgStyle" src={{SpInfo.img}}>\n  <h2 *ngIf="SpInfo"  align="middle">{{SpInfo.name}} </h2><br>\n  <p *ngIf="SpInfo">{{SpInfo.speechAbout}}</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/speakers-info/speakers-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], SpeakersInfoPage);
    return SpeakersInfoPage;
}());

//# sourceMappingURL=speakers-info.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SponsorPage = (function () {
    function SponsorPage(navCtrl, navParams, angularFireAuth, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.fireDB = fireDB;
    }
    SponsorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SponsorPage');
        this.fireDB.list('/sponsor').valueChanges().subscribe(function (res) {
            _this.sponsors = res;
            console.log(_this.sponsors);
        });
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/sponsor/sponsor.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Sponsors</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://ec.europa.eu/neighbourhood-enlargement/neighbourhood/countries/syria/madad_en" target="blank">\n          <img class="imgStyle" src="http://rbk.org/logos/Madad Logo.jpg">\n        </a>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://www.mercycorps.org/" target="blank">\n          <img class="imgStyle" src="http://graduateinstitute.ch/files/live/sites/iheid/files/sites/students/careers/images/Logos/MCbrand_Logo_Vertical_PMS_186_PC.jpg">\n        </a>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://www.microsoft.com" target="blank">\n          <img class="imgStyle" src="http://pngimg.com/uploads/microsoft/microsoft_PNG6.png">\n        </a>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://nethope.org/" target="blank">\n          <img class="imgStyle" src="http://nethope.org/wp-content/uploads/2017/06/NetHope_Logo_Stk_S_RGB_150ppi.png">\n        </a>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://www.nrc.no/" target="blank">\n          <img class="imgStyle" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Norwegian_Refugee_Council_ENG_logo.gif">\n        </a>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="http://www.rbk.org" target="blank">\n          <img class="imgStyle" src="http://rbk.org/wp-content/uploads/2016/03/znewlogo.png">\n        </a>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://www.jo.zain.com" target="blank">\n          <img class="imgStyle" src="https://images.forbes.com/media/lists/companies/zain_416x416.jpg">\n        </a>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://www.careem.com/amman" target="blank">\n          <img class="imgStyle" src="https://i1.wp.com/www.thebrandberries.com/wp-content/uploads/2017/01/LOGO-OPEN-FILE-01-3.png?fit=530%2C240">\n        </a>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="https://www.unicef.org/" target="blank">\n          <img class="imgStyle" src="http://1000logos.net/wp-content/uploads/2017/06/UNICEF-Logo.jpg">\n        </a>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col>\n      <div class="imgStyle">\n        <a href="http://www.wvi.org/syria-crisis" target="blank">\n          <img class="imgStyle" src="https://www.tdsd.com/wp-content/uploads/2013/12/WorldVision-Logo.jpg">\n        </a>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/sponsor/sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_info_person_info__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendeesPage = (function () {
    function AttendeesPage(navCtrl, navParams, _usersProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usersProvider = _usersProvider;
        this.users = [];
        this.filteredUsers = [];
        this.searchQuery = '';
        this.placeHolder = 'search by name';
        this.filterCriteria = "name";
        this.getUsers();
    }
    AttendeesPage.prototype.filterUsers = function () {
        var _this = this;
        var searchQueryInner = this.searchQuery.toLowerCase();
        var filterCriteriaInner = {
            "name of organization": "organizationName",
            "type of organization": "organizationType",
            "position": "position"
        };
        if (searchQueryInner !== '' && this.filterCriteria === 'name') {
            this.filteredUsers = this.users.filter(function (user) {
                return user.firstName.toLowerCase().includes(searchQueryInner) ||
                    user.lastName.toLowerCase().includes(searchQueryInner);
            });
        }
        else if (searchQueryInner !== '' && this.filterCriteria !== 'name') {
            this.filteredUsers = this.users.filter(function (user) {
                return user[filterCriteriaInner[_this.filterCriteria]].toLowerCase().includes(searchQueryInner);
            });
        }
        else {
            this.filteredUsers = this.users;
        }
    };
    AttendeesPage.prototype.setFilterCriteria = function () {
        this.placeHolder = "search by " + this.filterCriteria;
    };
    AttendeesPage.prototype.sortAttendees = function () {
        this.users = this.users.sort(function (a, b) { return b.firstName - a.firstName; });
        this.filteredUsers = this.filteredUsers.sort(function (a, b) { return b.firstName - a.firstName; });
    };
    AttendeesPage.prototype.getUsers = function () {
        var _this = this;
        this.usersObservable = this._usersProvider.getAttendees().subscribe(function (users) {
            _this.users = users;
            _this.filteredUsers = users;
        });
    };
    AttendeesPage.prototype.showPerson = function (person) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__person_info_person_info__["a" /* PersonInfoPage */], { person: person });
    };
    AttendeesPage.prototype.ionViewWillLeave = function () {
        if (!!this.usersObservable) {
            this.usersObservable.unsubscribe();
        }
    };
    AttendeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendees',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/attendees/attendees.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Attendees</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-input [(ngModel)]="searchQuery" type="text" [placeholder]="placeHolder" (input)="filterUsers()">Search By</ion-input>\n      <ion-select [(ngModel)]="filterCriteria" (ionChange)="setFilterCriteria()">\n        <ion-option value="name" selected>Name</ion-option>\n        <ion-option value="name of organization">Organization Name</ion-option>\n        <ion-option value="type of organization">Organization Type</ion-option>\n        <ion-option value="position">Position</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item *ngFor="let user of filteredUsers" (click)="showPerson(user)">\n      <ion-grid>\n        <ion-row>\n          <ion-avatar>\n            <img [src]="user.picUrl">\n          </ion-avatar>\n          <ion-col>\n            <h2>{{user.firstName + \' \' + user.lastName}}</h2>\n            <p>{{user.position}}</p>\n          </ion-col>\n          <ion-icon name="information-circle-outline"></ion-icon>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/attendees/attendees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], AttendeesPage);
    return AttendeesPage;
}());

//# sourceMappingURL=attendees.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cam_cam__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_user_report_user__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonInfoPage = (function () {
    function PersonInfoPage(navCtrl, navParams, _camProvider, calendar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._camProvider = _camProvider;
        this.calendar = calendar;
        this.person = this.navParams.get('person');
        this._camProvider.getPicture(this.person.uid).then(function (res) { return _this.picURL = res; });
    }
    PersonInfoPage.prototype.goToReportpage = function () {
        this.obj = { ReportUser: this.person };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__report_user_report_user__["a" /* ReportUserPage */], this.obj);
    };
    PersonInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-person-info',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/person-info/person-info.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title *ngIf="person">{{person.firstName + \' \' + person.lastName + "\' "}}Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-grid *ngIf="person">\n      <ion-row>\n        <img *ngIf="picURL" [src]="picURL" class="personalImg">\n        <ion-col class="titleCol">\n          <a href="https://www.google.com/calendar" target="blank">\n            <button ion-button small color="nlgen" style="padding: 17zpx 6px; position: absolute; right:0; bottom:0px;">\n              Arrange a meeting\n            </button>\n          </a>\n          <h1>{{person.firstName + \' \' + person.lastName}}</h1>\n          <h3>{{person.position}}</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row class="desRow">\n        <ion-col>\n          {{person.description}}\n        </ion-col>\n        <ion-col>\n          <button ion-button small (click)="goToReportpage()" color="danger" style="padding: 17zpx 6px; position: absolute; right: 0; bottom:0.3px;">\n            Report\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/person-info/person-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cam_cam__["a" /* CamProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */]])
    ], PersonInfoPage);
    return PersonInfoPage;
}());

//# sourceMappingURL=person-info.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportUserPage = (function () {
    function ReportUserPage(navCtrl, navParams, authProvider, firDb, emailComposer, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.firDb = firDb;
        this.emailComposer = emailComposer;
        this.toastCtrl = toastCtrl;
        this.ReportUser = this.navParams.get('ReportUser');
    }
    ReportUserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ReportUserPage');
        console.log(this.ReportUser, "ddddddddddddddddd");
        this.CarantUserEmail = this.authProvider.getUserAuth().email;
        this.CarantUserUid = this.authProvider.getUserAuth().uid;
        console.log(this.CarantUserEmail, this.CarantUserUid);
        this.firDb.list('/reportEmail').valueChanges().subscribe(function (res) {
            _this.email1 = res;
            console.log(_this.email1[0]);
        });
    };
    ReportUserPage.prototype.sendMsg = function () {
        var reportObj = {
            sender: this.CarantUserEmail,
            reported: this.ReportUser.email,
            reportedUid: this.ReportUser.uid,
            msgte: this.msg
        };
        console.log(reportObj);
        this.firDb.database.ref('reports').push(reportObj);
        var email = {
            to: this.email1[0],
            cc: this.email1[0],
            subject: 'report user',
            body: 'Hi , I will report user :' + reportObj.reported + 'His uid is : ' + reportObj.reportedUid,
            isHtml: true
        };
        this.emailComposer.open(email);
        var toast = this.toastCtrl.create({
            message: 'Thank You, This User Reported',
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    ReportUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-user',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/report-user/report-user.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Report a User</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label color="nlgen" stacked>Please specify the reason/s you want to report this person for: </ion-label>\n  <br>\n  <ion-textarea [(ngModel)]="msg" style=" border-width: 1px;border-style: solid;border-color: #00bfbb">\n  </ion-textarea>\n  <br>\n  <button ion-button small color="nlgen" style="padding: 17zpx 6px;" (click)=" sendMsg()">\n    Report\n  </button>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/report-user/report-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ReportUserPage);
    return ReportUserPage;
}());

//# sourceMappingURL=report-user.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cam_cam__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_prof_view_personal_prof_view__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateProfilePage = (function () {
    function UpdateProfilePage(navCtrl, navParams, actionSheet, _camProvider, _usersProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheet = actionSheet;
        this._camProvider = _camProvider;
        this._usersProvider = _usersProvider;
        this.sourcesArrays = {
            countries: [
                "Afghanistan",
                "Åland Islands",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Cayman Islands",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands",
                "Colombia",
                "Comoros",
                "Congo",
                "Congo, The Democratic Republic of the",
                "Cook Islands",
                "Costa Rica",
                "Côte d'Ivoire",
                "Croatia",
                "Cuba",
                "Curaçao",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Falkland Islands (Malvinas)",
                "Faroe Islands",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and McDonald Islands",
                "Holy See (Vatican City State)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran, Republic of",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israeli Occupation (Palestine)",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea, Democratic People's Republic of",
                "Korea, Republic of",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Macedonia, Republic Of",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia, Federated States of",
                "Moldova, Republic of",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestinian Territory, Occupied",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Reunion",
                "Romania",
                "Russian Federation",
                "Rwanda",
                "Saint Barthélemy",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French Part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch Part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "United States Minor Outlying Islands",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela",
                "Viet Nam",
                "Virgin Islands, British",
                "Virgin Islands, U.S.",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe"
            ],
            organizations: [
                "Government",
                "INGO",
                "National NGO/Community Organization",
                "UN",
                "Institutional Donor",
                "Foundation",
                "Private Investor",
                "SME/Startup",
                "Private Sector",
                "Academic",
                "Media",
                "I am a youth representative",
                "Other",
            ],
            NLGCountries: [
                "Egypt",
                "Iraq",
                "Jordan",
                "Lebanon",
                "Syria",
                "Turkey",
                "Other non-NLG country (please specify):"
            ],
            interestAreas: [
                "Employment",
                "Entrepreneurship",
                "Technical and Vocational Education and Training",
                "Higher Education",
                "Participation and Representation of Young People",
                "Gender Issues",
            ],
        };
        this.user = {
            firstName: null,
            lastName: null,
            country: null,
            organizationName: null,
            organizationType: null,
            NLGCountries: [],
            interestAreas: [],
            position: null,
            description: null,
        };
        this.srcOption = '';
        this.showOptions = false;
    }
    UpdateProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user = this.navParams.get('user');
        this._camProvider.getPicture(null).then(function (val) {
            _this.picURL = val;
        }).catch(console.error);
    };
    UpdateProfilePage.prototype.selectSrc = function (event) {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: 'Take a Photo',
                    handler: function () {
                        _this._camProvider.takePhoto('CAMERA').then(function (res) { return _this.picURL = res; });
                    }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this._camProvider.takePhoto('PHOTOLIBRARY').then(function (res) { return _this.picURL = res; });
                    }
                },
            ]
        });
        actionSheet.present();
    };
    UpdateProfilePage.prototype.goToPage = function (saved) {
        if (saved === 'saved') {
            this._usersProvider.updateUserInfo(this.user);
            this._camProvider.postPicture();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__personal_prof_view_personal_prof_view__["a" /* PersonalProfViewPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__personal_prof_view_personal_prof_view__["a" /* PersonalProfViewPage */]);
        }
    };
    UpdateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-profile',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/update-profile/update-profile.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Update Personal Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img *ngIf="picURL" id="profImg" [src]="picURL">\n  <button ion-fab color=nlgen id="camButt" (click)=selectSrc()>\n    <ion-icon name="camera"></ion-icon>\n  </button>\n\n  <ion-list id="list">\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input [(ngModel)]="user.firstName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input [(ngModel)]="user.lastName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Country</ion-label>\n      <ion-select [(ngModel)]="user.country" type="text">\n        <ion-option *ngFor="let country of sourcesArrays.countries">{{country}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Organization Name</ion-label>\n      <ion-input [(ngModel)]="user.organizationName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Organization Type</ion-label>\n      <ion-select [(ngModel)]="user.organizationType" type="text">\n        <ion-option *ngFor="let organizationType of sourcesArrays.organizations">{{organizationType}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Countries of interest</ion-label>\n      <ion-select multiple="true" [(ngModel)]="user.NLGCountries" type="text">\n        <ion-option *ngFor="let NLGCountry of sourcesArrays.NLGCountries">{{NLGCountry}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Fields of interest</ion-label>\n      <ion-select multiple="true" [(ngModel)]="user.interestAreas" type="text">\n        <ion-option *ngFor="let interestArea of sourcesArrays.interestAreas">{{interestArea}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Position</ion-label>\n      <ion-input [(ngModel)]="user.position" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea [(ngModel)]="user.description">\n      </ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <div style="text-align:center;">\n    <button round ion-button full (click)="goToPage(\'saved\')" color="nlgen">Save\n    </button>\n    <br>\n    <button round ion-button full (click)="goToPage(\'cancel\')" color="nlgen">Cancel\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/update-profile/update-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cam_cam__["a" /* CamProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */]])
    ], UpdateProfilePage);
    return UpdateProfilePage;
}());

//# sourceMappingURL=update-profile.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exhibitors_info_exhibitors_info__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExhibitorsPage = (function () {
    function ExhibitorsPage(navCtrl, navParams, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
    }
    ExhibitorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireDB.list('/exhibitor').valueChanges().subscribe(function (res) {
            _this.exhibitors = res;
            console.log(_this.exhibitors);
        });
    };
    ExhibitorsPage.prototype.goToInfo = function (exhibitor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exhibitors_info_exhibitors_info__["a" /* ExhibitorsInfoPage */], { exhibitorInfo: exhibitor });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], ExhibitorsPage.prototype, "nav", void 0);
    ExhibitorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exhibitors',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/exhibitors/exhibitors.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Exhibitors</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let exhibitor of exhibitors">\n      <ion-thumbnail item-start>\n        <a href={{exhibitor.link}} target="blank">\n          <img id="imgStyle" src={{exhibitor.img}}}>\n        </a>\n      </ion-thumbnail>\n      <h2>{{exhibitor.name}}</h2>\n      <ion-thumbnail item-end>\n        <button id="btnStyle" ion-button round small color="nlgen" (click)="goToInfo(exhibitor)">Info</button>\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/exhibitors/exhibitors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ExhibitorsPage);
    return ExhibitorsPage;
}());

//# sourceMappingURL=exhibitors.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitorsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExhibitorsInfoPage = (function () {
    function ExhibitorsInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExhibitorsInfoPage.prototype.ionViewDidLoad = function () {
        this.info = this.navParams.get('exhibitorInfo');
    };
    ExhibitorsInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exhibitors-info',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/exhibitors-info/exhibitors-info.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>Exhibitor Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <img *ngIf="info" src={{info.img}}}>\n  <h2 *ngIf="info"  align="middle">{{info.name}} </h2>\n  <p *ngIf="info">{{info.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/exhibitors-info/exhibitors-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], ExhibitorsInfoPage);
    return ExhibitorsInfoPage;
}());

//# sourceMappingURL=exhibitors-info.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, _usersProvider, chatservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usersProvider = _usersProvider;
        this.chatservice = chatservice;
        this.users = [];
        this.searchResults = [];
        this.getUsers();
    }
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        this.usersObservable = this._usersProvider.getAttendees().subscribe(function (users) {
            _this.searchResults = _this.users = users;
        });
    };
    ChatPage.prototype.findUsers = function (ev) {
        var query = ev.target.value.toLowerCase();
        var keys = ['firstName', 'lastName'];
        if (query && query.trim() != '') {
            this.users = this.searchResults.filter(function (item) {
                return keys.some(function (key) {
                    return String(item[key]).toLowerCase().includes(query);
                });
            });
        }
        else {
            this.getUsers();
        }
    };
    ChatPage.prototype.initChat = function (person) {
        this.chatservice.initializeChat(person);
        this.navCtrl.push('UserchatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/chat/chat.html"*/'<ion-header >\n	<ion-navbar color="nlgen">\n		<ion-title>Chat</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-searchbar (ionInput)="findUsers($event)"></ion-searchbar>\n  <ion-list no-lines>\n    <ion-item *ngFor="let user of users" (click)="initChat(user)">\n	  <ion-avatar item-start>\n	    <img [src]="user.picUrl">\n	  </ion-avatar>\n	  <h2>{{user.firstName + \' \' + user.lastName}}</h2>\n	  <p>{{user.position}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = (function () {
    function ResetPasswordPage(authData, navCtrl, navParams, formBuilder, alertCtrl) {
        this.authData = authData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, EmailValidator.isValid])],
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We just sent you a reset link to your email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                errorAlert.present();
            });
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/reset-password/reset-password.html"*/'<ion-header color="nlgen">\n  <ion-navbar color="nlgen">\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty">\n      <p>Please enter a valid email</p>\n    </ion-item>\n\n    <button ion-button block type="submit" style="background-color:#00bfbb">\n      Submit\n    </button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (formControl) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formControl.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());
//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthData = (function () {
    function AuthData() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth();
    }
    AuthData.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    AuthData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthData);
    return AuthData;
}());

//# sourceMappingURL=auth-data.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agenda_agenda__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegProfilePage = (function () {
    function RegProfilePage(navCtrl, navParams, FirDB, _authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FirDB = FirDB;
        this._authProvider = _authProvider;
        this.sourcesArrays = {
            countries: [
                "Afghanistan",
                "Åland Islands",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Cayman Islands",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands",
                "Colombia",
                "Comoros",
                "Congo",
                "Congo, The Democratic Republic of the",
                "Cook Islands",
                "Costa Rica",
                "Côte d'Ivoire",
                "Croatia",
                "Cuba",
                "Curaçao",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Falkland Islands (Malvinas)",
                "Faroe Islands",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and McDonald Islands",
                "Holy See (Vatican City State)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran, Republic of",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israeli Occupation (Palestine)",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea, Democratic People's Republic of",
                "Korea, Republic of",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Macedonia, Republic Of",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia, Federated States of",
                "Moldova, Republic of",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestinian Territory, Occupied",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Reunion",
                "Romania",
                "Russian Federation",
                "Rwanda",
                "Saint Barthélemy",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French Part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch Part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "United States Minor Outlying Islands",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela",
                "Viet Nam",
                "Virgin Islands, British",
                "Virgin Islands, U.S.",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe"
            ],
            organizations: [
                "Government",
                "INGO",
                "National NGO/Community Organization",
                "UN",
                "Institutional Donor",
                "Foundation",
                "Private Investor",
                "SME/Startup",
                "Private Sector",
                "Academic",
                "Media",
                "I am a youth representative",
                "Other",
            ],
            NLGCountries: [
                "Egypt",
                "Iraq",
                "Jordan",
                "Lebanon",
                "Syria",
                "Turkey",
                "Other non-NLG country (please specify):"
            ],
            interestAreas: [
                "Employment",
                "Entrepreneurship",
                "Technical and Vocational Education and Training",
                "Higher Education",
                "Participation and Representation of Young People",
                "Gender Issues",
            ],
        };
        this.emptyFields = true;
        this.profile = {
            firstName: null,
            lastName: null,
            country: null,
            organizationName: null,
            organizationType: null,
            NLGCountries: [],
            interestAreas: [],
            position: null,
            description: null,
        };
    }
    RegProfilePage.prototype.checkFields = function () {
        if (this.profile.firstName &&
            this.profile.lastName &&
            this.profile.country &&
            this.profile.organizationName &&
            this.profile.organizationType &&
            this.profile.position &&
            this.profile.NLGCountries.length !== 0 &&
            this.profile.interestAreas.length !== 0 &&
            this.profile.description) {
            this.emptyFields = false;
        }
        else {
            this.emptyFields = true;
        }
    };
    RegProfilePage.prototype.registerProfile = function () {
        var _this = this;
        var uid = this._authProvider.getUserAuth().uid;
        var email = this._authProvider.getUserAuth().email;
        this.profile['uid'] = uid;
        this.profile['email'] = email;
        this.profile['picUrl'] = 'https://i.imgur.com/5RAenOq.png';
        this.FirDB.database.ref('users/' + uid).set(this.profile).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__agenda_agenda__["a" /* AgendaPage */]); }).catch(function (err) { return console.error(err); });
    };
    RegProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reg-profile',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/reg-profile/reg-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Profile Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input (input)="checkFields()" type="text" [(ngModel)]="profile.firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input (input)="checkFields()" type="text" [(ngModel)]="profile.lastName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Country</ion-label>\n      <ion-select (ionChange)=\'checkFields()\' [(ngModel)]="profile.country">\n        <ion-option *ngFor="let country of sourcesArrays.countries">{{country}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Organization Name</ion-label>\n      <ion-input (input)="checkFields()" type="text" [(ngModel)]="profile.organizationName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Organization Type</ion-label>\n      <ion-select (ionChange)=\'checkFields()\' [(ngModel)]="profile.organizationType">\n        <ion-option *ngFor="let organization of sourcesArrays.organizations">{{organization}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>NLG countries interested in</ion-label>\n      <ion-select multiple="true" (ionChange)=\'checkFields()\' [(ngModel)]="profile.NLGCountries">\n        <ion-option *ngFor="let NLGCountry of sourcesArrays.NLGCountries">{{NLGCountry}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Fields of interest</ion-label>\n      <ion-select multiple="true" (ionChange)=\'checkFields()\' [(ngModel)]="profile.interestAreas">\n        <ion-option *ngFor="let area of sourcesArrays.interestAreas">{{area}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Current Position</ion-label>\n      <ion-input (input)="checkFields()" type="text" [(ngModel)]="profile.position"></ion-input>\n    </ion-item>\n\n    <ion-item style="margin-top: 12px">\n      <ion-label stacked style="font-size: 100%">Personal Description</ion-label>\n      <ion-input placeholder="What do you want people to know about you!" (input)="checkFields()" type="text" [(ngModel)]="profile.description"></ion-input>\n    </ion-item>\n\n    <button ion-button block large (click)="registerProfile()" style="background-color:#00bfbb; margin-top:2em" [disabled]="emptyFields">Continue</button>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/reg-profile/reg-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegProfilePage);
    return RegProfilePage;
}());

//# sourceMappingURL=reg-profile.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppTeamPage = (function () {
    function AppTeamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppTeamPage');
    };
    AppTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-app-team',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/app-team/app-team.html"*/'<ion-header>\n\n  <ion-navbar color="nlgen">\n    <ion-title>App Team</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card class="card">\n    <img class="profImg" src="https://firebasestorage.googleapis.com/v0/b/nlg-dev.appspot.com/o/team%2F0.jpeg?alt=media&token=f22089e8-a0a1-458f-bf9f-4275fdb2e16d"/>\n    <div class="card-title">Siraj Kakeh</div>\n    <div class="card-subtitle">sirajonline.89@gmail.com</div>\n  </ion-card>\n\n  <ion-card class="card">\n    <img class="profImg" src="https://firebasestorage.googleapis.com/v0/b/nlg-dev.appspot.com/o/team%2F1.jpeg?alt=media&token=36f014a2-8810-47f1-98c6-2309073f484c"/>\n    <div class="card-title">Duha Ali</div>\n    <div class="card-subtitle">dohaali415@gmail.com</div>\n  </ion-card>\n\n  <ion-card class="card">\n    <img class="profImg" src="https://firebasestorage.googleapis.com/v0/b/nlg-dev.appspot.com/o/team%2F2.jpeg?alt=media&token=1b20e260-5339-43ee-885b-1ab744067e4b"/>\n    <div class="card-title">Aaya Hassan</div>\n    <div class="card-subtitle">aayahassan94@gmail.com</div>\n  </ion-card>\n\n  <ion-card class="card">\n    <img class="profImg" src="https://firebasestorage.googleapis.com/v0/b/nlg-dev.appspot.com/o/team%2F3.png?alt=media&token=a78fea3c-8ce6-440b-a9c0-36ecdf0a9af0"/>\n    <div class="card-title">Rana Kelani</div>\n    <div class="card-subtitle">rana.kelani@gmail.com</div>\n  </ion-card>\n\n  <ion-card class="card">\n    <img class="profImg" src="https://firebasestorage.googleapis.com/v0/b/nlg-dev.appspot.com/o/team%2F4.jpeg?alt=media&token=435f0903-7613-4b78-af1f-28858a8af612"/>\n    <div class="card-title">Majd Muhder</div>\n    <div class="card-subtitle">majd@rbk.org</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/app-team/app-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], AppTeamPage);
    return AppTeamPage;
}());

//# sourceMappingURL=app-team.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splash_screen_splash_screen__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pin_code_pin_code__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_agenda_agenda__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_speakers_speakers__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sponsor_sponsor__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_pro__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_attendees_attendees__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_users_users__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_person_info_person_info__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reset_password_reset_password__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_data_auth_data__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic2_pincode_input__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_reg_profile_reg_profile__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_personal_prof_view_personal_prof_view__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_update_profile_update_profile__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_cam_cam__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_exhibitors_exhibitors__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_exhibitors_info_exhibitors_info__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_chat_chat__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_report_user_report_user__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_email_composer__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_calendar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_speakers_info_speakers_info__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_app_team_app_team__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var IonicPro = __WEBPACK_IMPORTED_MODULE_21__ionic_pro__["Pro"].init('ac56531e', {
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_personal_prof_view_personal_prof_view__["a" /* PersonalProfViewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_attendees_attendees__["a" /* AttendeesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_person_info_person_info__["a" /* PersonInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reg_profile_reg_profile__["a" /* RegProfilePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_update_profile_update_profile__["a" /* UpdateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_exhibitors_exhibitors__["a" /* ExhibitorsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_exhibitors_info_exhibitors_info__["a" /* ExhibitorsInfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_report_user_report_user__["a" /* ReportUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pin_code_pin_code__["a" /* PinCodePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_speakers_info_speakers_info__["a" /* SpeakersInfoPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_app_team_app_team__["a" /* AppTeamPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/userchat/userchat.module#UserchatPageModule', name: 'UserchatPage', segment: 'userchat', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_28_ionic2_pincode_input__["PincodeInputModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_personal_prof_view_personal_prof_view__["a" /* PersonalProfViewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_attendees_attendees__["a" /* AttendeesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_person_info_person_info__["a" /* PersonInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reg_profile_reg_profile__["a" /* RegProfilePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_update_profile_update_profile__["a" /* UpdateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_exhibitors_exhibitors__["a" /* ExhibitorsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_exhibitors_info_exhibitors_info__["a" /* ExhibitorsInfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_report_user_report_user__["a" /* ReportUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pin_code_pin_code__["a" /* PinCodePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_speakers_info_speakers_info__["a" /* SpeakersInfoPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_app_team_app_team__["a" /* AppTeamPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_data_auth_data__["a" /* AuthData */],
                __WEBPACK_IMPORTED_MODULE_33__providers_cam_cam__["a" /* CamProvider */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_37__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_calendar__["a" /* Calendar */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_speakers_speakers__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sponsor_sponsor__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_attendees_attendees__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_personal_prof_view_personal_prof_view__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_cam_cam__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_exhibitors_exhibitors__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pin_code_pin_code__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_app_team_app_team__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, _authProvider, fireDB, _camProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this._authProvider = _authProvider;
        this.fireDB = fireDB;
        this._camProvider = _camProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_pin_code_pin_code__["a" /* PinCodePage */];
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    }
    MyApp.prototype.map = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */]);
    };
    MyApp.prototype.agenda = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__["a" /* AgendaPage */]);
    };
    MyApp.prototype.chat = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */]);
    };
    MyApp.prototype.about = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.speakers = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_speakers_speakers__["a" /* SpeakersPage */]);
    };
    MyApp.prototype.sponsor = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_sponsor_sponsor__["a" /* SponsorPage */]);
    };
    MyApp.prototype.signout = function () {
        var _this = this;
        this._authProvider.signout()
            .then(function () {
            _this.menu.close().then(function () { return _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_pin_code_pin_code__["a" /* PinCodePage */]); });
        })
            .catch(console.error);
    };
    MyApp.prototype.profile = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_personal_prof_view_personal_prof_view__["a" /* PersonalProfViewPage */]);
    };
    MyApp.prototype.attendees = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_attendees_attendees__["a" /* AttendeesPage */]);
    };
    MyApp.prototype.menuOpened = function () {
        var _this = this;
        this._camProvider.getPicture(null).then(function (res) {
            _this.profilePicURL = res;
        });
        this.userEmail = this._authProvider.getUserAuth().email;
        this.fireDB.list('/users').valueChanges().subscribe(function (data) {
            _this.usersin = data.filter(function (user) {
                if (user['email']) {
                    return user['email'] === _this.userEmail;
                }
            });
            if (_this.usersin !== []) {
                _this.userName = _this.usersin[0].firstName + ' ' + _this.usersin[0].lastName;
            }
        });
    };
    MyApp.prototype.exhibitors = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_exhibitors_exhibitors__["a" /* ExhibitorsPage */]);
    };
    MyApp.prototype.team = function () {
        this.menu.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_app_team_app_team__["a" /* AppTeamPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/app/app.html"*/'<ion-menu [content]="myContent" (ionOpen)="menuOpened()" id="menu">\n  <ion-header>\n    <!-- <ion-navbar color="nlgen">\n      <button  ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n        Pages\n      </button>\n    </ion-navbar> -->\n  </ion-header>\n\n  <ion-content style="background-color:#00bfbb">\n    <ion-list>\n      <button style="background-color:#00bfbb" ion-item>\n        <div style="color:white; font-size:90%; font-weight: bold; background-color:#00bfbb;padding-left: 0.1cm;padding-top: 0.1cm; padding-bottom: 0cm;"\n          *ngIf="userEmail">\n          <img style="height:50px; width:50px; border-radius: 70%;\n            margin: auto;" [src]="profilePicURL" align="middle" />\n          <br>\n          <br>\n          <h6 style="font-size:150%;">{{userName}}</h6>\n          {{userEmail}}\n        </div>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)="agenda()">\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="calendar" style="width:25px; font-size: 25px;"></ion-icon>\n          Agenda\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)="attendees()">\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="ios-people" style="width:25px; font-size: 25px;"></ion-icon>\n          Attendees</h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)=\'speakers()\'>\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="headset" style="width:25px; font-size: 25px;"></ion-icon>\n          Speakers\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)=\'exhibitors()\'>\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="briefcase" style="width:25px; font-size: 25px;"></ion-icon>\n          Exhibitors\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)="chat()">\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="chatbubbles" style="width:25px; font-size: 25px;"></ion-icon>\n          Chats\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)=\'sponsor()\'>\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="card" style="width:25px; font-size: 25px;"></ion-icon>\n          Sponsors\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)="map()">\n        <h2 style="font-weight:bold; color:aliceblue ">\n          <ion-icon name="ios-navigate" style="width:25px; font-size: 25px;"></ion-icon>\n          Location\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)="profile()">\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="person" style="width:25px; font-size: 25px;"></ion-icon>\n          Profile\n        </h2>\n      </button>\n\n      <button style="background-color:#00bfbb" ion-item (click)=\'about()\'>\n        <h2 style="font-weight:bold; color:aliceblue">\n          <ion-icon name="information-circle" style="width:25px; font-size: 25px;"></ion-icon>\n          About\n        </h2>\n      </button>\n    \n      <button style="background-color:#00bfbb" ion-item (click)=\'team()\'>\n          <h2 style="font-weight:bold; color:aliceblue">\n            <ion-icon name="information-circle" style="width:25px; font-size: 25px;"></ion-icon>\n            App Team\n          </h2>\n        </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <button style="background-color:#00bfbb" ion-item (click)="signout()">\n      <h2 style="font-weight:bold; color:aliceblue; text-align: center;">\n        Sign Out\n      </h2>\n    </button>\n  </ion-footer>\n</ion-menu>\n\n<ion-nav id="nav" #myContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_13__providers_cam_cam__["a" /* CamProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pin_code_pin_code__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashScreenPage = (function () {
    function SplashScreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SplashScreenPage.prototype.ionViewDidLoad = function () {
        var that = this;
        setTimeout(function () {
            that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pin_code_pin_code__["a" /* PinCodePage */]);
        }, 3000);
    };
    SplashScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash-screen',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/splash-screen/splash-screen.html"*/'<ion-header></ion-header>\n<ion-content padding class="masters">\n  <ion-grid>\n    <ion-row style="padding-top:60%">\n      <ion-col col-3></ion-col>\n      <ion-col col-6>\n        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfCkjjZ1V7L6eh5TqsTyM4EZFQV2g4WRVs09NNMm7YL2IDpDa6A" style="display: block;"\n        />\n        <p style="color:white; text-align:center;">Loading...</p>\n      </ion-col>\n      <ion-col col-3></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <p style="color:white; text-align:center">Built By Human Refugees</p>\n</ion-footer>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/splash-screen/splash-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], SplashScreenPage);
    return SplashScreenPage;
}());

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_menu_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendaPage = (function () {
    function AgendaPage(navCtrl, navParams, fireDB, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.menu = menu;
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menu.enable(true, "menu");
        this.fireDB.list('/agenda').valueChanges().subscribe(function (res) {
            _this.items = res;
        });
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/agenda/agenda.html"*/'<ion-header>\n\n  <ion-navbar color="nlgen">\n    <ion-title>Agenda</ion-title>\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  padding>\n    <ion-item-group  *ngFor="let item of items" >\n      <ion-item class=\'texttitel\' style="color:#00bfbb;">\n        {{item.sessionName}}<ion-icon style="color:black; position: absolute; right: 15px;font-size: 32px;" name="calendar"></ion-icon>\n      </ion-item>\n      <ion-item class=\'textstyle\'>\n        <h2 class="texttitel">{{item.speaker}} </h2>\n        <h2>{{item.time}}</h2>\n        <h2>{{item.location}}</h2>\n      </ion-item>\n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/agenda/agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CamProvider = (function () {
    function CamProvider(cam, _authProvider) {
        this.cam = cam;
        this._authProvider = _authProvider;
        this.picture = '';
    }
    CamProvider.prototype.takePhoto = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            var camOptions, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        camOptions = {
                            quality: 30,
                            targetHeight: 500,
                            targetWidth: 500,
                            destinationType: this.cam.DestinationType.DATA_URL,
                            encodingType: this.cam.EncodingType.JPEG,
                            saveToPhotoAlbum: true,
                            sourceType: this.cam.PictureSourceType[src],
                            mediaType: this.cam.MediaType.PICTURE,
                            correctOrientation: true,
                            cameraDirection: this.cam.Direction.FRONT
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.cam.getPicture(camOptions)];
                    case 2:
                        res = _a.sent();
                        this.picture = "data:image/jpeg;base64," + res;
                        return [2 /*return*/, this.picture];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CamProvider.prototype.postPicture = function () {
        var _this = this;
        if (this.picture !== '') {
            var uid_1 = this._authProvider.getUserAuth().uid;
            var pictures = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"])().ref("profilePictures/" + uid_1);
            pictures.putString(this.picture, 'data_url').then(function () {
                return _this.getPicture(null).then(function (url) {
                    return _this._authProvider.setProfPicURL(url, uid_1);
                });
            });
        }
        else {
            return console.error('No Picture was Taken or Chosen!');
        }
    };
    CamProvider.prototype.getPicture = function (uid) {
        uid = uid ? uid : this._authProvider.getUserAuth().uid;
        return Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"])().ref("profilePictures/" + uid).getDownloadURL();
    };
    CamProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */]])
    ], CamProvider);
    return CamProvider;
}());

//# sourceMappingURL=cam.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersProvider = (function () {
    function UsersProvider(_angularFireDatabase, _authProvider) {
        this._angularFireDatabase = _angularFireDatabase;
        this._authProvider = _authProvider;
    }
    UsersProvider.prototype.getAttendees = function () {
        return this._angularFireDatabase.list('users').valueChanges();
    };
    // getUsername(email) {
    //   let user;
    //   this._angularFireDatabase.list('/users').valueChanges().subscribe( data => {
    //     user = data.filter(user => user.email === email)[0];
    //     return user.firstName + ' ' + user.lastName;
    //   })
    // }
    UsersProvider.prototype.updateUserInfo = function (user) {
        var uid = this._authProvider.getUserAuth().uid;
        return this._angularFireDatabase.database.ref('users/' + uid).update(user);
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agenda_agenda__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PinCodePage = (function () {
    function PinCodePage(navCtrl, fireDB, pincodeCtrl, alertCtrl, menu, _auth) {
        this.navCtrl = navCtrl;
        this.fireDB = fireDB;
        this.pincodeCtrl = pincodeCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this._auth = _auth;
    }
    PinCodePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menu.enable(false, "menu");
        setTimeout(function () { return _this._auth.getUserAuth() ? _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__agenda_agenda__["a" /* AgendaPage */]) : null; }, 1000);
    };
    PinCodePage.prototype.goToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */], { hasPinCode: false });
    };
    PinCodePage.prototype.openPinCode = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Invitation PIN',
            hideForgotPassword: true,
            hideCancelButton: true,
            passSize: 6,
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (status === 'done') {
                var user = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('codes');
                user.once('value', function (_snapshot) {
                    var flag = false;
                    for (var i in _snapshot.val()) {
                        if (_snapshot.val()[i].value === code && _snapshot.val()[i].is_active === true) {
                            flag = true;
                            var ref = _this.fireDB.database.ref('codes/' + i);
                            if (code !== '090909') {
                                ref.update({ is_active: false });
                            }
                        }
                    }
                    if (flag) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Invalid code please try it again!',
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                });
            }
        });
    };
    PinCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pin-code',template:/*ion-inline-start:"/home/siraj/Desktop/nlgTechApp/src/pages/pin-code/pin-code.html"*/'<ion-header></ion-header>\n\n<ion-content padding>\n  <a href="https://www.nlgedtech.com/" target="blank">\n    <img src="assets/imgs/nlg.png" id="logoImg">\n  </a>\n  <div style=" text-align: center;color:#00bfbb;font-size:110% ;font-weight: bold; margin-top: -50px; margin-bottom:40px">2018 NLG Tech Summit </div>\n\n  <ion-grid id="grid">\n    <ion-row style="margin-bottom:5em"></ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <button ion-button full (click)="openPinCode()" style="background-color:#00bfbb; margin-bottom:1em">Enter Your Code</button>\n        <!-- <h3 style="color:#00bfbb; text-align:center; margin-top: 0.5em; margin-bottom:0.5em">Or</h3> -->\n        <button ion-button full (click)="goToSignIn()" style="background-color:#00bfbb; margin:0%">Sign In</button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/siraj/Desktop/nlgTechApp/src/pages/pin-code/pin-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input__["PincodeController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], PinCodePage);
    return PinCodePage;
}());

//# sourceMappingURL=pin-code.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map