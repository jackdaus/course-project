import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  // onAdd() {
  //   let newIngredient: Ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
  //   this.shoppingListService.addIngredient(newIngredient);
  // }

  onSubmit(recipeForm: NgForm) {
    let newIngredientName = recipeForm.form.controls.name.value;
    let newIngredientAmount = recipeForm.form.controls.amount.value;

    let newIngredient: Ingredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.shoppingListService.addIngredient(newIngredient);

    recipeForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient();
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }
}
