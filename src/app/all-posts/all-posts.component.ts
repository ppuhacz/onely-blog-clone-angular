import { Component } from '@angular/core';
import { asyncScheduler, scheduled } from 'rxjs';
import { Post, Data } from './all-posts.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GetDataService } from '../services/get-data/get-data.service';
import { PaginationService } from '../services/pagination/pagination.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent {
  postsToDisplay!: Post[];
  totalPages: number[] = [1];
  private path: string | null;

  currentPage!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getDataService: GetDataService,
    private paginationService: PaginationService
  ) {
    this.path = this.route.snapshot.paramMap.get('page');
  }

  ngOnInit(): void {
    const pageValue: string | null =
      this.route.snapshot.paramMap.get('page') ?? '1';
    this.currentPage = parseInt(pageValue, 10);

    if (isNaN(this.currentPage) || this.currentPage < 1) {
      this.currentPage = 1;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = this.route.snapshot.paramMap.get('page');
        this.fetchData();
      }
    });

    this.fetchData();
  }

  fetchData() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      next: (data: Data) => {
        const totalItems = data.posts.length;
        this.totalPages = Array(Math.ceil(totalItems / 9))
          .fill(0)
          .map((_, index) => index + 1);

        this.paginationService.getCurrentPage().subscribe((currentPage) => {
          const startIndex =
            (currentPage - 1) * this.paginationService.getItemsPerPage();
          const endIndex =
            startIndex + this.paginationService.getItemsPerPage();

          this.postsToDisplay = data.posts.slice(startIndex, endIndex);
        });
      },
    });
    this.paginationService.setCurrentPage(this.currentPage);
  }

  goToNextPage(): void {
    if (this.currentPage && this.totalPages) {
      this.currentPage += 1;
      if (this.currentPage <= this.totalPages.length) {
        this.router.navigate(['/allposts/', this.currentPage]);
        window.scrollTo(0, 0);
      }
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage && this.totalPages) {
      const previousPage = this.currentPage <= 1 ? 1 : this.currentPage - 1;
      this.currentPage = previousPage;
      this.router.navigate(['/allposts/', previousPage]);
      window.scrollTo(0, 0);
    }
  }
}
