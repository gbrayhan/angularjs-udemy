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
    {name: 'Vegeta', power: 8500, race: 'Saiyan'},
    {name: 'Freezer', power: 2000, race: 'Alien'},
    {name: 'Pikoro', power: 1600, race: 'Namekusei'},
  ];

  public onNewCharacter(character: Character): void {
    console.log("main component: ", character);
  }
}
