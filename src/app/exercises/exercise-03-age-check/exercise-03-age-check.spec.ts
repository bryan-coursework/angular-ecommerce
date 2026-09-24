import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise03AgeCheck } from './exercise-03-age-check';

describe('Exercise03AgeCheck', () => {
  let component: Exercise03AgeCheck;
  let fixture: ComponentFixture<Exercise03AgeCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise03AgeCheck],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise03AgeCheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
