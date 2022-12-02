import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoAnimalComponent } from './alimento-animal.component';

describe('AlimentoAnimalComponent', () => {
  let component: AlimentoAnimalComponent;
  let fixture: ComponentFixture<AlimentoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentoAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
