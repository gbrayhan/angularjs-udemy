import { Component } from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {DbzService} from "../../services/dbz.service";

@Component({
  selector: 'app-dbz-page-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainPageComponent {

  constructor(public dbzService: DbzService) {
  }
}
