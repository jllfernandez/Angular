import {Component, OnInit} from '@angular/core';
import {Luke} from '../luke';

@Component({
  selector: 'luke-list',
  templateUrl: './luke-list.component.html',
  styleUrls: ['./luke-list.component.scss']
})
export class LukeListComponent implements OnInit {

  lukes: Luke[];

  constructor() {
    this.lukes = [
      new Luke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Luke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Luke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  addLuke(luke) {
    this.lukes.unshift(luke);
  }

  deleteLuke(luke) {
    let indexToDelete = this.lukes.indexOf(luke);
    if (indexToDelete !== -1) {
      this.lukes.splice(indexToDelete, 1);
    }
  }

  ngOnInit() {
  }

}

