import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticoloComponent } from './single-articolo.component';

describe('SingleArticoloComponent', () => {
  let component: SingleArticoloComponent;
  let fixture: ComponentFixture<SingleArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
