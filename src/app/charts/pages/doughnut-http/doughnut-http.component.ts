import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [],
})
export class DoughnutHttpComponent implements OnInit {
  constructor(private chartService: ChartsService) {}

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
      }
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {

    // this.chartService.getSocialUsers()
    //   .subscribe( (data) => {
    //     console.log(data)
    //     const labels = Object.keys(data)
    //     const dataChart = Object.values(data)
    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{data:Object.values(data)}]
    //     }
    //   });

    this.chartService.getUsersRRSSData()
      .subscribe( ({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets };
      })

  }
}
