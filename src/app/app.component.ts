import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];

  onSubmitQuote(quote) {
    this.quotes.push(quote);
    this.sortByRating();
  }

  upvoteEvent(index) {
    this.quotes[index].rating++;
    this.sortByRating();
  }

  downvoteEvent(index) {
    this.quotes[index].rating--;
    this.sortByRating();
  }

  deleteEvent(index) {
    this.quotes.splice(index, 1);
    this.sortByRating();
  }

  sortByRating() {
    this.quotes.sort(function(a, b) {
      return b.rating - a.rating;
    });
  }
}
