import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise08ProductList } from './exercise-08-product-list';

describe('Exercise08ProductList', () => {
  let component: Exercise08ProductList;
  let fixture: ComponentFixture<Exercise08ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise08ProductList],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise08ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
