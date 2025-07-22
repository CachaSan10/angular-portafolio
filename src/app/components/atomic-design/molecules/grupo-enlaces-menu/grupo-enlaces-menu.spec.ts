import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEnlacesMenu } from './grupo-enlaces-menu';

describe('GrupoEnlacesMenu', () => {
  let component: GrupoEnlacesMenu;
  let fixture: ComponentFixture<GrupoEnlacesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoEnlacesMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoEnlacesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
