import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
        {
            path: '',
            redirectTo: 'agencies',
            pathMatch: 'full',
        },
        {
            path: 'agencies',
            loadChildren: () => import('./modules/agencies/agencies.module').then(m => m.AgenciesModule),
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
