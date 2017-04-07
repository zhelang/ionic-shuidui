import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IBeacon } from '@ionic-native/ibeacon';
import { File } from 'ionic-native';
declare var cordova:any;

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[IBeacon]
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private ibeacon: IBeacon) {
  	this.ibeacon.requestAlwaysAuthorization();
  	//let delegate = this.ibeacon.Delegate();
  	var delegate = new cordova.plugins.locationManager.Delegate();


  	delegate.didRangeBeaconsInRegion = function (pluginResult){
  		console.log(JSON.stringify(pluginResult));
  	};

  	var uuid = '00000000-0000-0000-0000-000000000000';
  	var identifier = 'myibeacon';

  	var major = 41778;
  	var minor = 42019;

  	var beaconRegion = new cordova.plugins.locationManager.BeaconRegion('all_beacons' , uuid , undefined , undefined);

  	cordova.plugins.locationManager.setDelegate(delegate);
  	cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion).fail(function(e){console.error(e);}).done();

  	console.log('No shit happended');
  }

  
  ionViewDidLoad() {
    console.log('fuck');

  }

}
