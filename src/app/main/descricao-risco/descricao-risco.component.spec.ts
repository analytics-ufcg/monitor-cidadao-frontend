import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoRiscoComponent } from './descricao-risco.component';

describe('DescricaoRiscoComponent', () => {
  let component: DescricaoRiscoComponent;
  let fixture: ComponentFixture<DescricaoRiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoRiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
