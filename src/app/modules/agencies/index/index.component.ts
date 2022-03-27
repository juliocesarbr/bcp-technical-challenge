import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencies } from '../../../core/models/agencies';
import { AgenciesService } from '../../../core/services/agencies.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  agenciesData: Agencies[] = this.agenciesService.index();

  constructor(
    private agenciesService: AgenciesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToUpdate(agency: any) {
    // console.log('goToUpdate() --> agency', agency);
    this.router.navigate(['agencies/update', agency]);
  }

}
