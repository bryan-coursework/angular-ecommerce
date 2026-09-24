import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise04StockStatus } from './exercise-04-stock-status';

describe('Exercise04StockStatus', () => {
  let component: Exercise04StockStatus;
  let fixture: ComponentFixture<Exercise04StockStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise04StockStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise04StockStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
