import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
