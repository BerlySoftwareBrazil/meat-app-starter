import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurate/restaurante.model';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styles: []
})
export class RestaurantesComponent implements OnInit {

  restaurants: Restaurant[] = [
    {
      id: 'bread-bakery',
      name: 'Bread & Bakery',
      category: 'Bakery',
      deliveryEstimate: '25m',
      rating: 4.9,
      imagePath: 'assets/img/restaurants/breadbakery.png'
    },
    {
      id: 'burger-house',
      name: 'Burger House',
      category: 'Hamburgers',
      deliveryEstimate: '100m',
      rating: 3.5,
      imagePath: 'assets/img/restaurants/burgerhouse.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}