import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChatRtComponent } from './componets/chat-rt/chat-rt.component';
import { ListadoRtComponent } from './componets/listado-rt/listado-rt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatRtComponent, ListadoRtComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule 
  ],
  exports: [
    ChatRtComponent,
    ListadoRtComponent
  ]
})
export class SharedModule { }
