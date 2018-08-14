import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DetailsPage),
  ],
})
export class DetailsPageModule {}
