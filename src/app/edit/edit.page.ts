import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  user: any = {};

  constructor(
    private modalCtrl:ModalController,
    private navParams:NavParams
  ) {
    this.user = this.navParams.data;

  }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss(this.user);
  }

}
