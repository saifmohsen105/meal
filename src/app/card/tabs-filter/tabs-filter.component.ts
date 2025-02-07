import {
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { GetApiService } from '../../get-data-api.service';

@Component({
  selector: 'app-tabs-filter',
  templateUrl: './tabs-filter.component.html',
  styleUrls: ['./tabs-filter.component.scss'],
})
export class TabsFilterComponent {
  data = inject(GetApiService);
  @ViewChildren('link') elements!: QueryList<ElementRef>;
  // switch betwwens tabs and using add a active
  changeMeal(event: any): void {
    const target = event.target as HTMLElement;
    const selectedMeal = target.innerHTML;
    this.elements.forEach((el) => {
      el.nativeElement.classList.remove('active');
    });
    target.classList.add('active');
    switch (selectedMeal) {
      case 'All':
        this.data.setRes('#/');
        break;
      default:
        this.data.setRes(selectedMeal);
    }
  }
}
