import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosLicitacoesComponent } from './municipios-licitacoes.component';

describe('MunicipiosLicitacoesComponent', () => {
  let component: MunicipiosLicitacoesComponent;
  let fixture: ComponentFixture<MunicipiosLicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipiosLicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiosLicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
