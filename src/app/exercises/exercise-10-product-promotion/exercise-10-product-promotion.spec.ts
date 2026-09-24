import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise10ProductPromotion } from './exercise-10-product-promotion';

describe('Exercise10ProductPromotion', () => {
  let component: Exercise10ProductPromotion;
  let fixture: ComponentFixture<Exercise10ProductPromotion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise10ProductPromotion],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise10ProductPromotion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
