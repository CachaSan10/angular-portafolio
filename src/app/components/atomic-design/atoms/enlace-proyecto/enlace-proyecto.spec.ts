import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceProyecto } from './enlace-proyecto';

describe('EnlaceProyecto', () => {
  let component: EnlaceProyecto;
  let fixture: ComponentFixture<EnlaceProyecto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlaceProyecto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlaceProyecto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
