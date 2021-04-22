import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChatRtComponent } from './componets/chat-rt/chat-rt.component';
import { ListadoRtComponent } from './componets/listado-rt/listado-rt.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChatRtComponent, ListadoRtComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    ChatRtComponent,
    ListadoRtComponent
  ]
})
export class SharedModule { }
