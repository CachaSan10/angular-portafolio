import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEnlaceProyecto } from './grupo-enlace-proyecto';

describe('GrupoEnlaceProyecto', () => {
  let component: GrupoEnlaceProyecto;
  let fixture: ComponentFixture<GrupoEnlaceProyecto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoEnlaceProyecto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoEnlaceProyecto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
