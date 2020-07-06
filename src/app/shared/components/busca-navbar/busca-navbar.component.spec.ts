import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaNavbarComponent } from './busca-navbar.component';

describe('BuscaNavbarComponent', () => {
  let component: BuscaNavbarComponent;
  let fixture: ComponentFixture<BuscaNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
