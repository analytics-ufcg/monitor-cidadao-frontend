import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLicitacaoComponent } from './info-licitacao.component';

describe('InfoLicitacaoComponent', () => {
  let component: InfoLicitacaoComponent;
  let fixture: ComponentFixture<InfoLicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
