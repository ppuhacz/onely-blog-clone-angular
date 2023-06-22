import { Component } from '@angular/core';
import { asyncScheduler, scheduled } from 'rxjs';
import { Category, Data, Post } from './category-posts.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GetDataService } from '../services/get-data/get-data.service';
import { PaginationService } from '../services/pagination/pagination.service';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.scss'],
})
export class CategoryPostsComponent {
  categoryPostsToDisplay!: Post[];
  private categoryPosts!: Post[];
  totalPages: number[] = [1];
  private category: string | null;
  private page: string | null;
  currentPage!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getDataService: GetDataService,
    private paginationService: PaginationService
  ) {
    this.category = this.route.snapshot.paramMap.get('category');
    this.page = this.route.snapshot.paramMap.get('page');
    console.log(this.page);
  }

  ngOnInit(): void {
    const pageValue: string | null =
      this.route.snapshot.paramMap.get('page') ?? '1';
    this.currentPage = parseInt(pageValue, 10);

    if (isNaN(this.currentPage) || this.currentPage < 1) {
      this.router.navigate(['/category/', this.category, 1]);
    }

    if (this.currentPage > this.totalPages.length + 1) {
      this.router.navigate([
        '/category/',
        this.category,
        this.totalPages.length + 1,
      ]);
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.page = this.route.snapshot.paramMap.get('page');
        this.category = this.route.snapshot.paramMap.get('category');
        this.currentPage = Number(this.page);
        this.fetchData();
      }
    });

    this.fetchData();
  }

  fetchData() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      next: (data: Data) => {
        const categories = data.categories;
        const matchingCategory = categories.filter(
          (category) => category.slug === this.category
        );
        this.categoryPosts = matchingCategory[0].posts;

        this.totalPages = Array(Math.ceil(this.categoryPosts.length / 9))
          .fill(0)
          .map((_, index) => index + 1);

        this.paginationService.getCurrentPage().subscribe((currentPage) => {
          const startIndex =
            (currentPage - 1) * this.paginationService.getItemsPerPage();
          const endIndex =
            startIndex + this.paginationService.getItemsPerPage();

          this.categoryPostsToDisplay = this.categoryPosts.slice(
            startIndex,
            endIndex
          );
        });
      },
    });
    this.paginationService.setCurrentPage(this.currentPage);
  }

  goToNextPage(): void {
    if (this.currentPage && this.totalPages) {
      this.currentPage += 1;
      if (this.currentPage <= this.totalPages.length) {
        this.router.navigate(['/category/', this.category, this.currentPage]);
        window.scrollTo(0, 0);
      }
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage && this.totalPages) {
      const previousPage = this.currentPage <= 1 ? 1 : this.currentPage - 1;
      this.currentPage = previousPage;
      this.router.navigate([`/category/${this.category}/${previousPage}`]);
      window.scrollTo(0, 0);
    }
  }
}
