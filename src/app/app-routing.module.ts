import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chart', 
    loadChildren: () => import('./charts/charts.module').then(m => m.GraphicsModule),
  },
  {
    path: '**',
    redirectTo: 'chart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
