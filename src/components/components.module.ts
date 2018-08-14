import { IonicModule } from 'ionic-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimeCardComponent } from './anime-card/anime-card';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [AnimeCardComponent],
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [AnimeCardComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class ComponentsModule {}
