import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  characters: Character[] = [
    {name: 'Goku', power: 15000, race: 'Saiyan'},
    {name: 'Vegeta', power: 8500, race: 'Saiyan'},
    {name: 'Freezer', power: 2000, race: 'Alien'},
    {name: 'Pikoro', power: 1600, race: 'Namekusei'},
  ];

  public onNewCharacter(character: Character): void {
    console.log("main component: ", character);

    this.characters.push(character);
  }


  public onDeleteCharacter(name: string): void {
    console.log("main component: ", name);
    this.characters = this.characters.filter(c => c.name !== name);
  }


}
