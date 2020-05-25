import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
  ]
};

// if the state argument is null, then we prodive a default value of initialState
// this has the effect of providing an initial state the first time the reducer runs
export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, // copy the old state with the spread operator
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }

    case ShoppingListActions.UPDATE_INGREDIENT:
      // get the original ingredient
      const ingredient = state.ingredients[action.payload.index];
      // copy the original ingredient and update the values
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      // create a new ingredients array 
      const updateIngredients = [...state.ingredients];
      // update the original ingredient with our new ingredient
      updateIngredients[action.payload.index] = updatedIngredient;
      return {
        ...state,
        ingredients: updateIngredients
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex != action.payload;
        })
      };

    // This handles the initialization action of the list. It returns the initialState we defined above.
    default:
      return state;
  }
}