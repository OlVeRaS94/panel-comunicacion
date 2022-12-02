import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadellateComponent } from './vistadellate.component';

describe('VistadellateComponent', () => {
  let component: VistadellateComponent;
  let fixture: ComponentFixture<VistadellateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadellateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistadellateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
