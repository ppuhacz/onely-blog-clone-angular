import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAuthorsListComponent } from './all-authors-list.component';

describe('AllAuthorsListComponent', () => {
  let component: AllAuthorsListComponent;
  let fixture: ComponentFixture<AllAuthorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAuthorsListComponent]
    });
    fixture = TestBed.createComponent(AllAuthorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
