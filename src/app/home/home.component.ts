import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: any;
  allPosts: any;
  recommendedPost: any;
  threeRecentPosts: any;
  recentKnowledgeBasePosts: any;
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

    this.recentKnowledgeBasePosts =
      this.data?.categories
        .find((category: any) => category.categoryName === 'Knowledge Base')
        ?.posts.slice(0, 3) ?? [];
    console.log(this.loading);
    console.log(this.getDataService.data.posts);
    console.log('recommended', this.recommendedPost.coverImage.url);
    console.log(this.threeRecentPosts);
    console.log(this.recentKnowledgeBasePosts);
  }
}
