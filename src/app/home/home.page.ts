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
    name: 'Pedro',
    img: 'assets/icon/favicon.png',
    email: 'Pedro@gmail.com',
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


