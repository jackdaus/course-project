import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
let RecipeListComponent = class RecipeListComponent {
    constructor() {
        this.recipes = [
            new Recipe('Baklava', 'This is simply a test', 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Baklava-Fifteen-Spatulas-11.jpg'),
            new Recipe('Baklava 2.0', 'This is simply a test', 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Baklava-Fifteen-Spatulas-11.jpg'),
            new Recipe('Baklava 3.0!!', 'This is simply a test', 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Baklava-Fifteen-Spatulas-11.jpg')
        ];
    }
    ngOnInit() {
    }
};
RecipeListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    })
], RecipeListComponent);
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map