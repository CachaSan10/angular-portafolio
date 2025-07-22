import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagen } from './imagen';

describe('Imagen', () => {
  let component: Imagen;
  let fixture: ComponentFixture<Imagen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imagen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
