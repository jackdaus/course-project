import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
    baseURL = 'https://ng-course-recipe-book-9806c.firebaseio.com/';
    recipesEndPoint = 'recipes.json';

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        this.http.put(this.baseURL + this.recipesEndPoint,
            recipes)
            .subscribe(
                resData => {},
                this.catchStorageError
            );
    }

    retrieveRecipes() {
        return this.http.get<Recipe[]>(this.baseURL + this.recipesEndPoint)
            .pipe(
                map(receivedRecipes => {
                    return receivedRecipes.map(recipe => {
                        return { ...recipe, ingredinets: recipe.ingredients ? recipe.ingredients : [] };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }

    private catchStorageError(errorData) {
        let errorMessage;
        errorMessage = errorData.error.error ? errorData.error.error : 'Unidentified error';
        alert(errorMessage);
    }
}
