import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  @Input() quotes;
  @Output() upvoteEvent2 = new EventEmitter();
  @Output() downvoteEvent2 = new EventEmitter();
  @Output() deleteEvent2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upvoteEvent(index) {
    this.upvoteEvent2.emit(index);
  }

  downvoteEvent(index) {
    this.downvoteEvent2.emit(index);
  }

  deleteEvent(index) {
    this.deleteEvent2.emit(index);
  }

}
