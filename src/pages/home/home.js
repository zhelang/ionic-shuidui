var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IBeacon } from 'ionic-native';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomePage = (function () {
    function HomePage(navCtrl, navParams, ibeacon) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ibeacon = ibeacon;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        //var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(region.id,region.uuid,region.major,region.minor);
        var beaconRegion = IBeacon.BeaconRegion('demo', 'C96A588F-AE75-475A-8FF5-4CD72378728A');
        // Request permission to use location on iOS
        IBeacon.requestAlwaysAuthorization();
        // create a new delegate and register it with the native layer
        var delegate = IBeacon.Delegate();
        IBeacon.startRangingBeaconsInRegion(beaconRegion).then(function () { return console.log('Native layer recieved the request to ranging'); }, function (error) { return console.error('Native layer failed to begin ranging: ', error); });
        delegate.didRangeBeaconsInRegion().subscribe(function (data) {
            console.log('didRangeBeaconsInRegion: ', data);
        }, function (error) { return console.error(); });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, IBeacon])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map