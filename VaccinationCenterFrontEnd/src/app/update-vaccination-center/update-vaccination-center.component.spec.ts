import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccinationCenterComponent } from './update-vaccination-center.component';

describe('UpdateVaccinationCenterComponent', () => {
  let component: UpdateVaccinationCenterComponent;
  let fixture: ComponentFixture<UpdateVaccinationCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVaccinationCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
