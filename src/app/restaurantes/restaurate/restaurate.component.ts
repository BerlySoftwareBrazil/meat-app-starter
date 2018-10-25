import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurante.model';

@Component({
  selector: 'mt-restaurate',
  templateUrl: './restaurate.component.html',
  styles: []
})
export class RestaurateComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
