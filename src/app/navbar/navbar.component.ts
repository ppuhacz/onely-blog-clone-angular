import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Navbar } from './navbar.interface';
import { GetDataService } from '../services/get-data/get-data.service';
import { scheduled, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  data?: Navbar[];
  path: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private getDataService: GetDataService
  ) {
    this.path = this.location.path().split('/').slice(1);
  }

  ngOnInit() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe(
      (data) => (this.data = data.categories)
    );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.urlAfterRedirects.split('/').slice(1);
      }
    });
  }

  titleDisplay(): string {
    if (this.path[0] === 'category') {
      return this.path[1].replaceAll('-', ' ');
    } else if (this.path[0] === 'allposts') {
      return 'All posts';
    } else {
      return '';
    }
  }

  isPostsOrCategoryPage(): boolean {
    return this.path[0] === 'category' || this.path[0] === 'allposts';
  }

  isPostOrAuthorPage(): boolean {
    return this.path[0] === 'post' || this.path[0] === 'author';
  }

  is404Page(): boolean {
    return this.path[0] === '404';
  }
}
