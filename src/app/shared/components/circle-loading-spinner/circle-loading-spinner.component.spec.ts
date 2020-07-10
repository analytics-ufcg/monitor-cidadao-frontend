import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLoadingSpinnerComponent } from './circle-loading-spinner.component';

describe('CircleLoadingSpinnerComponent', () => {
  let component: CircleLoadingSpinnerComponent;
  let fixture: ComponentFixture<CircleLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
