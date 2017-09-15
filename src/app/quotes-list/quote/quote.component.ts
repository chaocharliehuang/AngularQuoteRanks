import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote;
  @Input() i;
  @Output() upvoteEvent = new EventEmitter();
  @Output() downvoteEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upvote(index) {
    this.upvoteEvent.emit(index);
  }

  downvote(index) {
    this.downvoteEvent.emit(index);
  }

  delete(index) {
    this.deleteEvent.emit(index);
  }

}
