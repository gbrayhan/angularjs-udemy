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



  public charactersList: Character[] = [
    {name: 'Trunks', power: 15000, race: 'Saiyan'},
    {name: 'Yamkcha', power: 8500, race: 'Human'}
  ];

  @Input()
  public charactersListFromParent: Character[] = [];

  public deletedCharacter(name: string):void {
    console.log("deleted: ", name);
    this.onDeleteCharacter.emit(name);
  }

}

