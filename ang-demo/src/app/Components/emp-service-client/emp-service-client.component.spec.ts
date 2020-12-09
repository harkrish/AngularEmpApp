import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpServiceClientComponent } from './emp-service-client.component';

describe('EmpServiceClientComponent', () => {
  let component: EmpServiceClientComponent;
  let fixture: ComponentFixture<EmpServiceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpServiceClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpServiceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
