import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Data, Post, Category } from './home.interface';
import { scheduled, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private data?: Data;
  private allPosts?: Post[];
  recommendedPost?: Post;
  threeRecentPosts?: Post[];
  restOfRecentPosts?: Post[];
  recentKnowledgeBasePosts?: Post[];
  loading?: boolean;

  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
        this.allPosts = this.data?.posts;
        this.recommendedPost = this.allPosts?.find(
          (post: Post) => post.recommendedPost === true
        );

        this.threeRecentPosts = this.allPosts?.slice(0, 3);
        this.restOfRecentPosts = this.allPosts?.slice(3, 9);
        this.recentKnowledgeBasePosts =
          this.data?.categories
            .find(
              (category: Category) => category.categoryName === 'Knowledge Base'
            )
            ?.posts.slice(0, 3) ?? [];
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
    scheduled(this.getDataService.getLoadingStatus(), asyncScheduler).subscribe(
      {
        next: (loading) => {
          this.loading = loading;
        },
        error: (error) => {
          console.error('Error getting loading status:', error);
        },
      }
    );

    console.log(this.loading);
  }
}
