import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimeProvider } from '../../providers/anime/anime';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public animeProvider: AnimeProvider) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  ionViewDidEnter(){
    this.getData();
  }

  getData(){
    this.animeProvider.getAll().subscribe((data: any) =>{
      this.list = data;
    })
  }

  doRefresh(refresher){
    refresher.complete();
    this.getData();
  }
  
  onClick(clickedAnime){
    this.navCtrl.push("DetailsPage", {anime: clickedAnime});
  }

  add(){
    this.navCtrl.push("AddEditPage");
  }
}
