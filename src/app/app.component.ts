import { Component } from '@angular/core';
import { GetDataService } from './services/get-data/get-data.service';
import { asyncScheduler, scheduled } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading?: boolean;
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    scheduled(this.getDataService.fetchData(), asyncScheduler).subscribe({
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
    scheduled(this.getDataService.getLoadingStatus(), asyncScheduler).subscribe(
      {
        next: (loading) => {
          this.loading = loading;
        },
        error: (error) => {
          console.error('Error getting loading status:', error);
        },
      }
    );
  }
}
