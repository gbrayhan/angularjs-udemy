import { Component } from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'dbz-components-create',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  public newCharacter: Character = {
    name: '',
    race: '',
    power: 0
  }

  // setter newCharacter to initial value
  initializeNewCharacter() {
    this.newCharacter = {
      name: '',
      race: '',
      power: 0
    }


  }
  public saveCharacter() {
    console.log("save: ", this.newCharacter);

    this.initializeNewCharacter();
  }
}
