import { Component, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../services/get-data/get-data.service';
import { scheduled, asyncScheduler, find } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../all-posts/all-posts.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent {
  post!: Post;
  postSlug: string | null;
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute
  ) {
    this.postSlug = this.route.snapshot.paramMap.get('post');
  }

  ngOnInit() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      next: (data) => {
        const allPosts = data.posts;
        const findPost = allPosts.find((post) => post.slug === this.postSlug);
        if (findPost) {
          this.post = findPost;
        }
      },
    });
  }
}
