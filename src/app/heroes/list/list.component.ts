import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public deletedHeroName: string = '';

  public deleteLastHero(): void {
    // get first last name of hero to be deleted
    this.deletedHeroName = this.heroNames.length > 0 ?
      this.heroNames[this.heroNames.length - 1] :
      '';

    // using functional programing on js
    this.heroNames = this.heroNames.length > 0 ?
      this.heroNames.filter((heroName, index) => index !== this.heroNames.length - 1) :
      [];

  }

}
