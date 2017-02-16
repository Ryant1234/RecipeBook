import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
new Recipe('Fried Chicken', 'Brilliant', 'http://www.texaschickenmalaysia.com/menu/chicken-2pc-chicken.png',
[]
),
new Recipe('Burger', 'Burgerlicious', "http://www.finecooking.com/assets/uploads/posts/51161/051111023-01-bison-burger-recipe_xlg.jpg",
[]
)
  
]
@Output() recipeSelected = new EventEmitter<Recipe>();




  constructor() { }

  ngOnInit() {
  }

onSelected(recipe: Recipe){
this.recipeSelected.emit(recipe);
}
}
