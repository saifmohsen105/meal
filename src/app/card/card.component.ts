import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Meal } from '../meal';
import { GetApiService } from '../get-data-api.service';
import { TabsFilterComponent } from './tabs-filter/tabs-filter.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [TabsFilterComponent],
})
export class CardComponent implements OnInit {
  // variables using dom
  @ViewChild('cards') card!: ElementRef;
  @ViewChild('box') box!: ElementRef;
  @ViewChild('btmClose') btmClose!: ElementRef;
  @ViewChild('loadin') loadin!: ElementRef;

  // property using in class
  data = inject(GetApiService);
  meal: Meal = {} as Meal;
  res: string = '';
  resInformationCard: Meal = {} as Meal;
  cardId: number = 0;

  // life cycle run one only
  ngOnInit(): void {
    this.data.res$.subscribe((newRes) => {
      this.res = newRes;
      this.fetchMeal();
    });
  }

  // select new data in Api
  fetchMeal(): void {
    this.data.getData(this.res).subscribe({
      next: (res: any) => {
        this.meal = res;
        console.log(res);
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

  //  update data because i want new data if click tab
  updateRes(newRes: string): void {
    this.data.setRes(newRes);
  }

  // get id because i want select meal is if clicked
  getIdCard(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const card = target.closest('.card');
    this.cardId = Number(card?.getAttribute('id'));
  }

// show box meal if clicked tab
  showBox() {
    this.meal.meals.forEach((meal) => {
      if (Number(meal.idMeal) === this.cardId) {
        const card = this.card.nativeElement as HTMLElement;
        const box = this.box.nativeElement as HTMLElement;
        card.style.display = 'none';
        box.style.display = 'flex';
        this.resInformationCard =
          this.resInformationCard == undefined ? ({} as Meal) : meal;
      }
    });
  }

// hide box if clicked buttom cancle
  hideBox() {
    const card = this.card.nativeElement as HTMLElement;
    const box = this.box.nativeElement as HTMLElement;
    card.style.display = 'flex';
    box.style.display = 'none';
  }
}
