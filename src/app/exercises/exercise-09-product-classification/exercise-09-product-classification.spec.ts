import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise09ProductClassification } from './exercise-09-product-classification';

describe('Exercise09ProductClassification', () => {
  let component: Exercise09ProductClassification;
  let fixture: ComponentFixture<Exercise09ProductClassification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise09ProductClassification],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise09ProductClassification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
