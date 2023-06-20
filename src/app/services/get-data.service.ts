import { Injectable } from '@angular/core';
import { request } from 'graphql-request';
import { ASSETS_QUERY } from './ASSETS_QUERY';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  data: any = null;
  loading: boolean = true;
  dataQuery = ASSETS_QUERY;
  apiUrl =
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcozcwgx0lbo01uneoby69s1/master';

  async fetchData() {
    try {
      const response = await request(this.apiUrl, this.dataQuery);
      this.data = response;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.loading = false;
    }
  }
}
