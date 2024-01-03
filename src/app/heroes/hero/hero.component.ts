import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman'
  public age: number = 45

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  changeHeroName():void{
    this.name = 'Spiderman'
  }
  changeHeroAge():void{
    this.age = 16
  }

}
