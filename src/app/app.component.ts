import { Component } from '@angular/core';
import { AgenciesService } from './core/services/agencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcp-technical-challenge';

  constructor(
    private agenciesService: AgenciesService
  ) {
    this.agenciesService.saveAgenciesInLocalStorage();
  }

}
