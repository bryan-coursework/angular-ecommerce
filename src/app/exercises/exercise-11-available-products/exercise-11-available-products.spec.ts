import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise11AvailableProducts } from './exercise-11-available-products';

describe('Exercise11AvailableProducts', () => {
  let component: Exercise11AvailableProducts;
  let fixture: ComponentFixture<Exercise11AvailableProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise11AvailableProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise11AvailableProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
