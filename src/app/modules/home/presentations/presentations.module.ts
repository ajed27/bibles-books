import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationsComponent } from './presentations/presentations.component';


@NgModule({
  declarations: [
    PresentationsComponent
  ],
  imports: [
    CommonModule,
    PresentationsRoutingModule
  ]
})
export class PresentationsModule { }
