import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurate/restaurante.model';
import { ResturantesService } from './restaurantes.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styles: []
})
export class RestaurantesComponent implements OnInit {

 restaurants: Restaurant[]; 

  constructor(private restaurantsService: ResturantesService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
