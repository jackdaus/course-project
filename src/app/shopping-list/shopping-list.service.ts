import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditting = new Subject<number>();

  ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];

  getIngredients() {
    return this.ingredients.slice();  
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  clearIngredients(){
    this.ingredients = [];
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}