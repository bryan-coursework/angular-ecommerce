import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise05NameList } from './exercise-05-name-list';

describe('Exercise05NameList', () => {
  let component: Exercise05NameList;
  let fixture: ComponentFixture<Exercise05NameList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise05NameList],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise05NameList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
