import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscoContratosComponent } from './risco-contratos.component';

describe('RiscoContratosComponent', () => {
  let component: RiscoContratosComponent;
  let fixture: ComponentFixture<RiscoContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscoContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscoContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
