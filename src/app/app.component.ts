import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}
  pages: any[] | null = null;
  getQuery(query: string) {
    this.wikipedia.getPages(query).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
