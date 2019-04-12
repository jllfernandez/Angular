import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Luke} from '../luke';

@Component({
  selector: 'luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.scss']
})
export class LukeComponent implements OnInit {

  constructor() {
  }

  @Input('luke') data: Luke;
  @Output() lukeDeleted = new EventEmitter<Luke>();
  
  deleteItem() {
    this.lukeDeleted.emit(this.data);
  }

  ngOnInit() {
  }

}

 