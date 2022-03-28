import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencies } from '../../../core/models/agencies';
import { AgenciesService } from '../../../core/services/agencies.service';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  faStar = faStar;

  agenciesData: Agencies[] = this.agenciesService.index();

  constructor(
    private agenciesService: AgenciesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Go to Update Agency page
   * @param agency any
   */
  goToUpdate(agency: any) {
    this.router.navigate(['agencies/update', agency]);
  }

}
