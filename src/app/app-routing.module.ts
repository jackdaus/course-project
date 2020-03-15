import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGaurd } from './auth/auth.gaurd';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path:'recipes', component: RecipesComponent, canActivate: [AuthGaurd],children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id/edit', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] }
    ]},
    { path:'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}