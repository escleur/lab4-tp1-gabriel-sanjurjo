import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PptRoutingModule } from './ppt-routing.module';
import { PptComponent } from './ppt.component';


@NgModule({
  declarations: [PptComponent],
  imports: [
    CommonModule,
    PptRoutingModule
  ]
})
export class PptModule { }
