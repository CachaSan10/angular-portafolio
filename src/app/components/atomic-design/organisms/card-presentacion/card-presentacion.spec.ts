import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentacion } from './card-presentacion';

describe('CardPresentacion', () => {
  let component: CardPresentacion;
  let fixture: ComponentFixture<CardPresentacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPresentacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPresentacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
