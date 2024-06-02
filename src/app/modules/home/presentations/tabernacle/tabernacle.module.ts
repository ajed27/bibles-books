import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabernacleRoutingModule } from './tabernacle-routing.module';
import { TabernacleComponent } from './tabernacle/tabernacle.component';
import { ElementComponent } from './element/element.component';


@NgModule({
  declarations: [
    TabernacleComponent,
    ElementComponent
  ],
  imports: [
    CommonModule,
    TabernacleRoutingModule
  ]
})
export class TabernacleModule { }
