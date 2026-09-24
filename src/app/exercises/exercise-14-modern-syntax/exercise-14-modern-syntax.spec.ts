import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise14ModernSyntax } from './exercise-14-modern-syntax';

describe('Exercise14ModernSyntax', () => {
  let component: Exercise14ModernSyntax;
  let fixture: ComponentFixture<Exercise14ModernSyntax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise14ModernSyntax],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise14ModernSyntax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
