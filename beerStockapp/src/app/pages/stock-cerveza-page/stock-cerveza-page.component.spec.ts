import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCervezaPageComponent } from './stock-cerveza-page.component';

describe('StockCervezaPageComponent', () => {
  let component: StockCervezaPageComponent;
  let fixture: ComponentFixture<StockCervezaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCervezaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCervezaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
