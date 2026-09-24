import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise07AlternatingColors } from './exercise-07-alternating-colors';

describe('Exercise07AlternatingColors', () => {
  let component: Exercise07AlternatingColors;
  let fixture: ComponentFixture<Exercise07AlternatingColors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise07AlternatingColors],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise07AlternatingColors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
