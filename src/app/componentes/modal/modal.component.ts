import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() tiempo:boolean;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    });
  }

}
