import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Data, Post } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data?: Data;
  allPosts?: Post[];
  recommendedPost?: Post;
  threeRecentPosts?: Post[];
  restOfRecentPosts?: Post[];
  recentKnowledgeBasePosts?: Post[];
  loading: boolean = true;
  constructor(private getDataService: GetDataService) {}

  async ngOnInit() {
    await this.getDataService.fetchData();
    this.data = this.getDataService.data;
    this.allPosts = this.getDataService.data?.posts;
    this.loading = this.getDataService.loading;
    this.recommendedPost = this.allPosts?.filter(
      (post: any) => post.recommendedPost === true
    )[0];

    this.threeRecentPosts = this.allPosts?.slice(0, 3);
    this.restOfRecentPosts = this.allPosts?.slice(3, 9);

    this.recentKnowledgeBasePosts =
      this.data?.categories
        .find((category: any) => category.categoryName === 'Knowledge Base')
        ?.posts.slice(0, 3) ?? [];
  }
}
