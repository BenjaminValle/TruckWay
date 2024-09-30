import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPage } from '../edit/edit.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  profile = {
    name: 'Sundar',
    img: 'assets/icon/favicon.png',
    email: 'me@codesundar.com',
  }

  constructor(
    private modalCtrl:ModalController
  ) {}


  edit(){
    this.modalCtrl.create({
      component: EditPage,
      componentProps: this.profile
    }).then(modalres => {
      modalres.present();

      modalres.onDidDismiss().then( res =>{
        if(res.data !=null){
          this.profile = res.data;
        }
      })
    })
  }

  ngOnInit() {
  }

}


