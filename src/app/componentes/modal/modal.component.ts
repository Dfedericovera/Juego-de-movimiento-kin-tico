import { Component, OnInit ,Input} from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() mensaje:boolean;
  constructor(private modalController: ModalController, private popOverController:PopoverController) { }

  ngOnInit() {
  }

  dismiss(){
    this.popOverController.dismiss();
  }

}
