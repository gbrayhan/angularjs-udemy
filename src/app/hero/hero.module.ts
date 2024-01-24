import { NgModule } from '@angular/core';
import {InfoComponent} from "./info/info.component";
import {ListComponent} from "./list/list.component";

@NgModule({
  declarations: [],
  imports: [
    InfoComponent,
    ListComponent
  ],
  exports: [
    InfoComponent,
    ListComponent
  ]
})
export class HeroModule { }
