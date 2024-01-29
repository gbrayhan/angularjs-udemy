import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from "./pages/main/main.component";
import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CreateComponent,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule {
}
