import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise06EmptyList } from './exercise-06-empty-list';

describe('Exercise06EmptyList', () => {
  let component: Exercise06EmptyList;
  let fixture: ComponentFixture<Exercise06EmptyList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise06EmptyList],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise06EmptyList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
