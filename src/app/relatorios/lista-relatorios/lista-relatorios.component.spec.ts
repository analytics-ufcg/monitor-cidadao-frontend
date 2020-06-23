import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelatoriosComponent } from './lista-relatorios.component';

describe('ListaRelatoriosComponent', () => {
  let component: ListaRelatoriosComponent;
  let fixture: ComponentFixture<ListaRelatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRelatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
