import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise02UserStatus } from './exercise-02-user-status';

describe('Exercise02UserStatus', () => {
  let component: Exercise02UserStatus;
  let fixture: ComponentFixture<Exercise02UserStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise02UserStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise02UserStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
