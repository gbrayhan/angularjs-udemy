import { Component } from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-page-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainPageComponent {
  characters: Character[] = [
    {name: 'Goku', power: 15000, race: 'Saiyan'},
    {name: 'Vegeta', power: 8500, race: 'Saiyan'}
  ];
}
