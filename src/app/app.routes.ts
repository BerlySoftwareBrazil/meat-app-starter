import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { CoberturaComponent } from './template/cobertura/cobertura.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'cobertura', component: CoberturaComponent}
]