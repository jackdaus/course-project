import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DropdownDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoadingSpinnerComponent,
    CommonModule,
    DropdownDirective,
  ],
})
export class SharedModule {}