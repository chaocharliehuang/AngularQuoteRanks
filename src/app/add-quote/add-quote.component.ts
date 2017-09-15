import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  quote: Quote = new Quote();
  @Output() quoteSubmittedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerQuoteSubmitEvent() {
    this.quoteSubmittedEvent.emit(this.quote);
    this.quote = new Quote();
  }

}
