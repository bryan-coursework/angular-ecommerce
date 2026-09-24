import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise13TaskList } from './exercise-13-task-list';

describe('Exercise13TaskList', () => {
  let component: Exercise13TaskList;
  let fixture: ComponentFixture<Exercise13TaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise13TaskList],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise13TaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
