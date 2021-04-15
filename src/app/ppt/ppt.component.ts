import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  mano = "piedra";
  constructor() {
   }

  ngOnInit(): void {
  }
  select(mano: string):void{
    this.mano = mano;
  }
}
