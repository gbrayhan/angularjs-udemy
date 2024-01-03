import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
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
