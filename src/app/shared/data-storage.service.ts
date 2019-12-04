import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
	constructor(private http: HttpClient, private recipeService: RecipeService) {}
	baseURL: string = 'https://ng-course-recipe-book-9806c.firebaseio.com/';
	recipesEndPoint : string = 'recipes.json';

	storeRecipes() {
		const recipes = this.recipeService.getRecipes();

		this.http.put(this.baseURL + this.recipesEndPoint,
			recipes)
				.subscribe();
	}
	
	retrieveRecipes() {
		return this.http.get<Recipe[]>(this.baseURL + this.recipesEndPoint)
			.pipe(
				map(receivedRecipes => {
					return receivedRecipes.map(recipe => {
						return {...recipe, ingredinets: recipe.ingredients ? recipe.ingredients : []};
					});
				}),
				tap(recipes => {
					this.recipeService.setRecipes(recipes);
				})
			);
	}
}