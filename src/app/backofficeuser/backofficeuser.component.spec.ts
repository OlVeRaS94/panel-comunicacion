import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeuserComponent } from './backofficeuser.component';

describe('BackofficeuserComponent', () => {
  let component: BackofficeuserComponent;
  let fixture: ComponentFixture<BackofficeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackofficeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
