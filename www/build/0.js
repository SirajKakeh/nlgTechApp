webpackJsonp([0],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserchatPageModule", function() { return UserchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userchat__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserchatPageModule = (function () {
    function UserchatPageModule() {
    }
    UserchatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userchat__["a" /* UserchatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userchat__["a" /* UserchatPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__userchat__["a" /* UserchatPage */]
            ]
        })
    ], UserchatPageModule);
    return UserchatPageModule;
}());

//# sourceMappingURL=userchat.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserchatPage = (function () {
    function UserchatPage(navCtrl, navParams, chatservice, events, zone, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatservice = chatservice;
        this.events = events;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.allmessages = [];
        this.friend = this.chatservice.friend;
        this.scrollto();
        this.events.subscribe('newmessage', function () {
            _this.allmessages = [];
            _this.imgornot = [];
            _this.zone.run(function () {
                _this.allmessages = _this.chatservice.friendmessages;
                for (var key in _this.allmessages) {
                    if (_this.allmessages[key].message.substring(0, 4) == 'http')
                        _this.imgornot.push(true);
                    else
                        _this.imgornot.push(false);
                }
            });
        });
    }
    UserchatPage.prototype.addmessage = function () {
        var _this = this;
        this.chatservice.addnewmessage(this.newmessage).then(function () {
            _this.content.scrollToBottom();
            _this.newmessage = '';
        });
    };
    UserchatPage.prototype.ionViewDidEnter = function () {
        this.chatservice.getmessages();
    };
    UserchatPage.prototype.scrollto = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], UserchatPage.prototype, "content", void 0);
    UserchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userchat',template:/*ion-inline-start:"/home/siraj/Desktop/web_nlg/src/pages/userchat/userchat.html"*/'<ion-header>\n  <ion-navbar color="nlgen">\n    <ion-title>{{friend.firstName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content>\n  <div class="chatwindow">\n    <ion-list no-lines>\n      <ion-item *ngFor="let item of allmessages; let i = index" text-wrap>\n        <ion-avatar item-left *ngIf="item.sentby === friend.uid">\n          <img src="http://lentech.org/images/no_avatar.png">\n        </ion-avatar>\n        <div class="bubble me" *ngIf="item.sentby === friend.uid">\n          <h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n          <img src="{{item.message}}" *ngIf="imgornot[i]">\n        </div>\n        <ion-avatar item-right *ngIf="item.sentby != friend.uid">\n          <img src="{{photoURL}}">\n        </ion-avatar>\n        <div class="bubble you" *ngIf="item.sentby != friend.uid">\n          <h3 *ngIf="!imgornot[i]">{{item.message}}</h3>\n          <img src="{{item.message}}" *ngIf="imgornot[i]">\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer ion-fixed>\n  <ion-toolbar class="no-border" color="white">\n    <ion-input [(ngModel)]="newmessage" placeholder="Write your message ..."></ion-input>\n    <ion-buttons end>\n      <button ion-button (click)="addmessage()">\n        <ion-icon name="send" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/siraj/Desktop/web_nlg/src/pages/userchat/userchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], UserchatPage);
    return UserchatPage;
}());

//# sourceMappingURL=userchat.js.map

/***/ })

});
//# sourceMappingURL=0.js.map