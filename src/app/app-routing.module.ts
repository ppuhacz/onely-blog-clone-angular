import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CategoryPostsComponent } from './category-posts/category-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllAuthorsListComponent } from './all-authors-list/all-authors-list.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { PostComponent } from './post/post.component';

// import HomePage from "../pages/home-page";
// import CategoryPage from "../pages/category-page";
// import PostPage from "../pages/post-page";
// import AllPostsPage from "../pages/all-posts-page";
// import AllAuthorsPage from "../pages/all-authors-page";
// import PageNotFoundPage from "../pages/page-not-found-page";
// import AuthorPage from "../pages/author-page";

// export const GetRoutes = ({ data }: any) => (
//   <Routes>
//     <Route path="*" element={<PageNotFoundPage data={data} />} />
//     <Route path="/" element={<HomePage data={data} />} />
//     <Route path="/category/:id/:page" element={<CategoryPage data={data} />} />
//     <Route path="/posts/:page" element={<AllPostsPage data={data} />} />
//     <Route path="/post/:id" element={<PostPage />} />
//     <Route path="/author/:id" element={<AuthorPage data={data} />} />
//     <Route path="/authors/" element={<AllAuthorsPage data={data} />} />
//   </Routes>
// );

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'allposts/:page',
    component: AllPostsComponent,
  },
  {
    path: 'category/:category/:page',
    component: CategoryPostsComponent,
  },
  {
    path: 'authors',
    component: AllAuthorsListComponent,
  },
  {
    path: 'author/:author',
    component: AuthorPageComponent,
  },
  {
    path: 'post/:post',
    component: PostComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
