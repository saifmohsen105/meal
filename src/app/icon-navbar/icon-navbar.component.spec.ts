import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNavbarComponent } from './icon-navbar.component';

describe('IconNavbarComponent', () => {
  let component: IconNavbarComponent;
  let fixture: ComponentFixture<IconNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
