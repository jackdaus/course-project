import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.collapsed = true;
        this.recipeNavigateEmit = new EventEmitter();
        this.shoppingListChosen = new EventEmitter();
    }
    ngOnInit() {
    }
    goToRecipes() {
        this.recipeNavigateEmit.emit('test');
    }
    goToShoppingList() {
        this.shoppingListChosen.emit();
    }
};
tslib_1.__decorate([
    Output()
], HeaderComponent.prototype, "recipeNavigateEmit", void 0);
tslib_1.__decorate([
    Output()
], HeaderComponent.prototype, "shoppingListChosen", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map