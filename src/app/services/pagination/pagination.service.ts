import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private itemsPerPage = 9;
  private currentPage = new BehaviorSubject<number>(1);

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  getCurrentPage(): Observable<number> {
    return this.currentPage.asObservable();
  }

  setCurrentPage(page: number): void {
    this.currentPage.next(page);
  }
}
