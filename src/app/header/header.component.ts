import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sticky: boolean = false;
  path: string[];

  constructor(private router: Router) {
    this.path = this.router.url.split('/').slice(1);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.urlAfterRedirects.split('/').slice(1);
      }
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.sticky = window.scrollY > 25;
  };

  is404Page() {
    return this.path[0] === '404';
  }
}
