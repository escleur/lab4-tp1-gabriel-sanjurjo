import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt.component';

const routes: Routes = [{ path: '', component: PptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PptRoutingModule { }
