import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    SharedModule,
    FormsModule,
    CoreModule,
  ],
})
export class AuthModule { }
