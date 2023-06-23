import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data/get-data.service';
import { scheduled, asyncScheduler } from 'rxjs';
import { Author } from './all-authors-list.interface';

@Component({
  selector: 'app-all-authors-list',
  templateUrl: './all-authors-list.component.html',
  styleUrls: ['./all-authors-list.component.scss'],
})
export class AllAuthorsListComponent {
  authorsList!: Author[];
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      next: (data) => {
        this.authorsList = data.authors;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
