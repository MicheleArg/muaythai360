import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCorsiComponent } from './pagina-corsi.component';

describe('PaginaCorsiComponent', () => {
  let component: PaginaCorsiComponent;
  let fixture: ComponentFixture<PaginaCorsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCorsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
