import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() genres;
  @Output() genreChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleGenreChange(event) {
    const index = event.target.selectedIndex;    
    this.genreChange.emit((event.target)[index].innerText)   
  }
}
