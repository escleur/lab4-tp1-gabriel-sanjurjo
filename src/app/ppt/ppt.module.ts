import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PptRoutingModule } from './ppt-routing.module';
import { PptComponent } from './ppt.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [PptComponent,
   
],
  imports: [
    CommonModule,
    PptRoutingModule,
    MatProgressBarModule,
    MatDialogModule,
    SharedModule

  ]
})
export class PptModule { }
