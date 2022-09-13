import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';


@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DoughnutComponent,
    DoughnutHttpComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
