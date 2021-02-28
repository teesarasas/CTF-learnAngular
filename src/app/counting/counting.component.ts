import { Component } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})

export class CountComponent {
  count = 0;
  constructor() {

  }
  countNumber() {
    this.count = this.count + 1;
  }
}