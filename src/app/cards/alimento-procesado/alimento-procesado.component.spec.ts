import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoProcesadoComponent } from './alimento-procesado.component';

describe('AlimentoProcesadoComponent', () => {
  let component: AlimentoProcesadoComponent;
  let fixture: ComponentFixture<AlimentoProcesadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentoProcesadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentoProcesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
