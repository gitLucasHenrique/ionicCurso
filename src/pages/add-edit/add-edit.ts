import { AnimeProvider } from './../../providers/anime/anime';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-edit',
  templateUrl: 'add-edit.html',
})
export class AddEditPage {

  anime={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerAnime : AnimeProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditPage');
  }
  add(){
    this.providerAnime.add(this.anime).subscribe((data) => {
    this.navCtrl.pop();
    this.presentToast();
    })
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Anime adicionado',
      duration: 1500,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
