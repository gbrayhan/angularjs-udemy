import {Component, EventEmitter, Output} from '@angular/core';
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
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();


  // setter newCharacter to initial value
  initializeNewCharacter() {
    this.newCharacter = {
      name: '',
      race: '',
      power: 0
    }


  }
  public saveCharacter() {
    // validate properties
    if (this.newCharacter.name.trim().length === 0
      || this.newCharacter.race.trim().length === 0
      || this.newCharacter.power <= 0
    ) {
      return;
    }
    console.log("save: ", this.newCharacter);

    // emit event
    this.onNewCharacter.emit({...this.newCharacter});


    this.initializeNewCharacter();
  }
}
