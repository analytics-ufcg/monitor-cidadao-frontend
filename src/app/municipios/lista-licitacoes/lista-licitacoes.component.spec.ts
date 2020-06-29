import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLicitacoesComponent } from './lista-licitacoes.component';

describe('ListaLicitacoesComponent', () => {
  let component: ListaLicitacoesComponent;
  let fixture: ComponentFixture<ListaLicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
