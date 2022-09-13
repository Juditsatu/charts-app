import { Component } from '@angular/core';

interface MenuItem {
  route: string,
  text: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { route: '/chart/bars', text: 'Bars' },
    { route: '/chart/bars-double', text: 'Double bars' },
    { route: '/chart/doughnut', text: 'Doughnut' },
    { route: '/chart/doughnut-http', text: 'Doughnut HTTP' },
  ]

}
