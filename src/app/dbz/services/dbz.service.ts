import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000, race: 'Saiyan'},
    {id: uuid(), name: 'Vegeta', power: 8500, race: 'Saiyan'},
    {id: uuid(), name: 'Freezer', power: 2000, race: 'Alien'},
    {id: uuid(),  name: 'Pikoro', power: 1600, race: 'Namekusei'},
  ];

  public onNewCharacter(character: Character): void {
    console.log("main component: ", character);
    this.characters.push({...character});
  }


  public onDeleteCharacter(id: string): void {
    console.log("main component: ", id);
    this.characters = this.characters.filter(c => c.id !== id);
  }


}
