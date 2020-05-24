import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { 
      path: '', 
      redirectTo: '/recipes', 
      pathMatch: 'full' 
    },
    { 
      path: 'recipes', 
      loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) // using modern approach to set module
    },
    {
      path: 'shopping-list',
      loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' // old approach to set module
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
