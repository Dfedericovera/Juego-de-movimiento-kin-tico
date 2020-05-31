import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx'

@Component({
  selector: 'app-acelerometro',
  templateUrl: './acelerometro.page.html',
  styleUrls: ['./acelerometro.page.scss'],
})
export class AcelerometroPage implements OnInit {
  x: string;
  y: string;
  z: string;
  timeSpam: string;
  id: any;

  constructor(private deviceMotion: DeviceMotion) {
    this.x = ".";
    this.y = ".";
    this.z = ".";
    this.timeSpam = "-";
  }

  ngOnInit() {
  }

  start() {

    try {
      var option: DeviceMotionAccelerometerOptions =
      {
        frequency: 200
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) => {
        //Apoyado horizontalmente sobre una mesa
        this.x = "" + acc.x;
        this.y = "" + acc.y;
        this.z = "" + acc.z;
        this.timeSpam = "" + acc.timestamp;
      })

    }
    catch (error) {
      alert(error);
    }
  }

  stop(){
    this.id.unsubscribe();
  }

}
