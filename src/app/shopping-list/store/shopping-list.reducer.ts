import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  edittedIngredient: Ingredient;
  edittedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Pear', 1),
  ],
  edittedIngredient: null,
  edittedIngredientIndex: -1,
};

// if the state argument is null, then we prodive a default value of initialState
// this has the effect of providing an initial state the first time the reducer runs
export function shoppingListReducer(
  state: State = initialState,
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
      // copy the original ingredient and update the values
      const updatedIngredient = {
        ...state.edittedIngredient,
        ...action.payload
      };
      // create a new ingredients array 
      const updateIngredients = [...state.ingredients];
      // update the original ingredient with our new ingredient
      updateIngredients[state.edittedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updateIngredients,
        edittedIngredient: null,
        edittedIngredientIndex: -1
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex != state.edittedIngredientIndex;
        }),
        edittedIngredient: null,
        edittedIngredientIndex: -1
      };

      case ShoppingListActions.START_EDIT:
        return {
          ...state,
          edittedIngredientIndex: action.payload,
          edittedIngredient: {...state.ingredients[action.payload]}
        };
      case ShoppingListActions.STOP_EDIT:
        return {
          ...state,
          edittedIngredientIndex: -1,
          edittedIngredient: null
        };
      


    // This handles the initialization action of the list. It returns the initialState we defined above.
    default:
      return state;
  }
}