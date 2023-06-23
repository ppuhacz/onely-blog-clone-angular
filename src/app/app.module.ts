import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CategoryPostsComponent } from './category-posts/category-posts.component';
import { PostComponent } from './post/post.component';
import { AllAuthorsListComponent } from './all-authors-list/all-authors-list.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AllPostsComponent,
    CategoryPostsComponent,
    PostComponent,
    AllAuthorsListComponent,
    AuthorPageComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
