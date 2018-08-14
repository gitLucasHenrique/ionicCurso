import { Component, Input } from '@angular/core';

/**
 * Generated class for the AnimeCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'anime-card',
  templateUrl: 'anime-card.html'
})
export class AnimeCardComponent {

  @Input() anime;
  @Input() showDetails;

  constructor() {

  }

}
