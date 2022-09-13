import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bars',
        component: BarsComponent
      },
      {
        path: 'bars-double',
        component: BarsDoubleComponent
      },
      {
        path: 'doughnut',
        component: DoughnutComponent
      },
      {
        path: 'doughnut-http',
        component: DoughnutHttpComponent
      },
      {
        path: '**',
        redirectTo: 'bars'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
