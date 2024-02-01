import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-components-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter<string>();


  @Input()
  public charactersListFromParent: Character[] = [];

  public deletedCharacter(id: string):void {
    console.log("deleted: ", id);
    this.onDeleteCharacter.emit(id);
  }

}

