import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { request } from 'graphql-request';
import { ASSETS_QUERY } from '../ASSETS_QUERY';
import { Data } from './get-data.interface';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private data?: Observable<Data>;
  private loading = new BehaviorSubject<boolean>(true);
  private cachedData?: Data;
  private dataQuery = ASSETS_QUERY;
  private apiUrl =
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcozcwgx0lbo01uneoby69s1/master';

  fetchData(): Observable<Data> {
    if (!this.data) {
      this.data = new Observable((observer) => {
        if (this.cachedData) {
          observer.next(this.cachedData);
          observer.complete();
        } else {
          request(this.apiUrl, this.dataQuery)
            .then((response) => {
              this.cachedData = response as Data;
              this.loading.next(false);
              observer.next(this.cachedData);
              observer.complete();
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
              this.loading.next(true);
              observer.error(error);
            });
        }
      });
    }
    return this.data;
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
