
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';

export class RecipeService {

    constructor(private route: ActivatedRoute) {}

     recipes: Recipe[] = [
        new Recipe(0,
            'Baklava',
            'The delicious original.',
            'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Baklava-Fifteen-Spatulas-11.jpg',
            [
                new Ingredient('Dough', 2),
                new Ingredient('Walnuts', 3),
                new Ingredient('Honey', 10),

            ]),
            new Recipe(1,
            'Baklava 2.0',
            'A new twist on an old favorite.',
            'https://cleobuttera.com/wp-content/uploads/2018/03/lifted-baklava.jpg',
            [
                new Ingredient('Dough', 5),
                new Ingredient('Peanuts', 2),
                new Ingredient('Syrup', 8),

            ]),
      ];

    getRecipes() {
        //Uisng slice() with no arguments will keep the array's reference private
        return this.recipes.slice();
    };

    //To return an individual recipe, given the id number
    getRecipe(id: number) {
        
        return this.recipes[id];
    }

    saveRecipe(updatedRecipe: Recipe) {
        this.recipes.push(updatedRecipe);
    }
}