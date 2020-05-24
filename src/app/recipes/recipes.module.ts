import { NgModule } from '@angular/core';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeResolverService } from './recipe-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { AuthGaurd } from '../auth/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        canActivate: [AuthGaurd],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGaurd],
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService]
      },
    ]
  },
];

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule.forChild(routes), // forChild will automatically "merge" the child routes into the app module routes
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class RecipesModule { }
