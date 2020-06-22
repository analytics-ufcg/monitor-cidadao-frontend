import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosComponent } from './municipios.component';

describe('MunicipiosComponent', () => {
  let component: MunicipiosComponent;
  let fixture: ComponentFixture<MunicipiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
