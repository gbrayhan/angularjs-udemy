import {Component} from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: true,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = this.initialValueCounter;

  get initialValueCounter(): number {
    return 20;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = this.initialValueCounter
  }
}
