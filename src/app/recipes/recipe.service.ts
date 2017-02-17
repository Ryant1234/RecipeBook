import { Injectable } from '@angular/core';

import {Recipe} from './recipe'

@Injectable()
export class RecipeService {

private recipes: Recipe[] = [
new Recipe('Fried Chicken', 'Brilliant', 'http://www.texaschickenmalaysia.com/menu/chicken-2pc-chicken.png',
[]
),
new Recipe('Burger', 'Burgerlicious', "http://www.finecooking.com/assets/uploads/posts/51161/051111023-01-bison-burger-recipe_xlg.jpg",
[] )]; 



  constructor() { }


getRecipes() {
  return this.recipes;
}
}
