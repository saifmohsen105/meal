import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { TabsFilterComponent } from "./card/tabs-filter/tabs-filter.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task_scss';
}
