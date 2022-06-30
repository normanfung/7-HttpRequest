import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: any[] | null = null;

  constructor() {}

  visitLink(pageID: number) {
    return 'https://en.wikipedia.org?curid=' + pageID;
  }
  ngOnInit(): void {}
}
