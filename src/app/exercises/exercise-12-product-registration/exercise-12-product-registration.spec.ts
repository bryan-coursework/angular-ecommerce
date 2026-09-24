import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise12ProductRegistration } from './exercise-12-product-registration';

describe('Exercise12ProductRegistration', () => {
  let component: Exercise12ProductRegistration;
  let fixture: ComponentFixture<Exercise12ProductRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise12ProductRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise12ProductRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
