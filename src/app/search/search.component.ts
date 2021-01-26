import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = "";
  books: any;
  genres = [];
  isFav: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.showbooks();
  }

  showbooks() {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=inauthor=tolkien')
      .toPromise()
      .then((response: any) => {
        const bookArray : [] = (response.items).map(response => (response.volumeInfo));      
        this.books = bookArray;
        
        const allGenres : any[] = (this.books).map(book => book.categories[0])   

        this.genres = allGenres.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    })
  }

  handlesearch() {
    console.log(this.searchText)
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=${this.searchText}`)
      .toPromise()
      .then((response: any) => {
        const searchResults : [] = (response.items).map(response => (response.volumeInfo));  
        this.books = searchResults;
      })
  }

  toggleFav(event) {
    console.log(event.target);
    event.target.innerText = "Unfavourite"
  }

  handleGenreChange(event) {
    const books = this.books;
    books.filter(book => {
      const genre = book.categories[0];

      if(genre == `${event}`) {
        return book;      
      }

      this.books = books;
    })
  }
}
