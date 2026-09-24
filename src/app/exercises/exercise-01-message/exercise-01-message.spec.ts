import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise01Message } from './exercise-01-message';

describe('Exercise01Message', () => {
  let component: Exercise01Message;
  let fixture: ComponentFixture<Exercise01Message>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise01Message],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise01Message);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
