import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from './all-posts.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetDataService } from '../services/get-data/get-data.service';
import { PaginationService } from '../services/pagination/pagination.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent {
  private postsToDisplay?: Observable<Post[]>;
  totalPages?: number[];

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    private paginationService: PaginationService
  ) {}
}

//  # Inside the ngOnInit method:

// this.route.paramMap is an observable that provides the route parameters of the current URL.

// The switchMap operator allows us to switch to a new observable based on the page parameter obtained from the route.

// Inside the switchMap, we set the current page in the PaginationService using this.paginationService.setCurrentPage(page).

// We then fetch the data using this.getDataService.fetchData().

// Upon receiving the data, we process it and calculate the total number of pages based on the number of items.

// We subscribe to the current page changes using this.paginationService.getCurrentPage().subscribe() and update the postsToShow$ observable with the appropriate slice of data for the current page.

//  # Inside the goToPage method:

// The goToPage method is triggered when a pagination button is clicked.

// It uses the Angular `Router
