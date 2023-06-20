import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.fetchData();
  }
}
