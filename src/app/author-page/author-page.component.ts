import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data/get-data.service';
import { scheduled, asyncScheduler } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Author } from './author-page-interface';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss'],
})
export class AuthorPageComponent {
  author!: Author;
  authorID: string | null;

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService
  ) {
    this.authorID = this.route.snapshot.paramMap.get('author');
  }

  ngOnInit() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      next: (data) => {
        const allAuthors = data.authors;
        const findAuthor = allAuthors.find(
          (author) => author.slug === this.authorID
        );

        if (findAuthor) {
          this.author = findAuthor;
        }
      },
    });
  }

  getObjectValues(): Author[] {
    return Object.values(this.author);
  }
}
