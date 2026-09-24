import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalProjectPanel } from './final-project-panel';

describe('FinalProjectPanel', () => {
  let component: FinalProjectPanel;
  let fixture: ComponentFixture<FinalProjectPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalProjectPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalProjectPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
