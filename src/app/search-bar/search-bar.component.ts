import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() queryEvent = new EventEmitter<string>();

  constructor() {}

  searchQuery(value: string, event: Event) {
    event.preventDefault();
    this.queryEvent.emit(value);
  }
  ngOnInit(): void {}
}
