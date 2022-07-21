import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccinationCenterComponent } from './add-vaccination-center.component';

describe('AddVaccinationCenterComponent', () => {
  let component: AddVaccinationCenterComponent;
  let fixture: ComponentFixture<AddVaccinationCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVaccinationCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
