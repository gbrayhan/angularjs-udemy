import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {HeroComponent} from "./heroes/hero/hero.component";
import {ListComponent} from "./heroes/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent, HeroComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Curso de Angular';
}
