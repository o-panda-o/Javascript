// Typescript imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewComponentComponent } from './view-component/view-component.component';

// Angular imports
@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewComponentComponent // Component is exported
  ]
})
export class ViewModule { }
