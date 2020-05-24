import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  recipeIdFromRoute: number;

  constructor(private slService: ShoppingListService,
              private recipeSerice: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService,) { }

  ngOnInit() {
    // This is good for intiialization of the component, but it will not update dynamicaly
    // let recipeIdFromRoute = this.route.snapshot.params['id'];
    // this.recipe = this.recipeSerice.getRecipe(recipeIdFromRoute);

    // To update dynamicaly, we need to use the params Observable
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeIdFromRoute = params.id;
          this.recipe = this.recipeSerice.getRecipe(this.recipeIdFromRoute);
        }
      );
  }

  sendToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.slService.addIngredient(ingredient);
    }
    alert('Items sent to Shopping List!');
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeSerice.deleteRecipe(this.recipeIdFromRoute);
    this.dataStorageService.storeRecipes();
    this.router.navigate(['recipes']);
  }
}
