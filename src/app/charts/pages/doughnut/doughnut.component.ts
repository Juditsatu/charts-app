import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

   // Doughnut
   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ], backgroundColor: '#FF5F5D', hoverBackgroundColor: '#FF9933' },
       { data: [ 50, 150, 120 ], backgroundColor: '#3F7C85', hoverBackgroundColor: '#0099DD' },
       { data: [ 250, 130, 70 ], backgroundColor: '#00CCBF', hoverBackgroundColor: '#00ABBD' }
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';

}
