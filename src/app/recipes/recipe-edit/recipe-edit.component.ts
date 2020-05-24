import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;


  constructor(private route: ActivatedRoute, 
      private recipeService: RecipeService, 
      private router: Router,
      private dataStorageService: DataStorageService,
      ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          // Check if the route has a parameter. If we are in edit mode, then there will be an ID, and params['id'] will not be NULL
          this.editMode = params.id != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name : new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0*9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {
    const submittedRecipe = new  Recipe(2,
                            this.recipeForm.value.name,
                            this.recipeForm.value.description,
                            this.recipeForm.value.imagePath,
                            this.recipeForm.value.ingredients
                            );
    if (this.editMode) { // If in editmode, then update existing recipe
      this.recipeService.updateRecipe(this.id, submittedRecipe);
      this.router.navigate(['/recipes', this.id]);
    } else {
      this.recipeService.addRecipe(submittedRecipe);

      const newestRecipeIndex = this.recipeService.getRecipes().length - 1;
      this.router.navigate(['/recipes', newestRecipeIndex]);
    }

    this.dataStorageService.storeRecipes();
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onDeleteIngredient(index: number) {
    console.log(this.recipeForm.controls.ingredients);
    (this.recipeForm.controls.ingredients as FormArray).removeAt(index);
  }

  onAddIngredient() {
    (this.recipeForm.controls.ingredients as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0*9]*$/)])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
