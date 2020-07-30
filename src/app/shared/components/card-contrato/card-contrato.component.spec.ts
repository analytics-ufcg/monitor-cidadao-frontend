import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContratoComponent } from './card-contrato.component';

describe('CardContratoComponent', () => {
  let component: CardContratoComponent;
  let fixture: ComponentFixture<CardContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
