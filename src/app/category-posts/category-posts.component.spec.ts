import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPostsComponent } from './category-posts.component';

describe('CategoryPostsComponent', () => {
  let component: CategoryPostsComponent;
  let fixture: ComponentFixture<CategoryPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPostsComponent]
    });
    fixture = TestBed.createComponent(CategoryPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
