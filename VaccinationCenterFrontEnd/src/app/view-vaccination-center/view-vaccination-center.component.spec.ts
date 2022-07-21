import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVaccinationCenterComponent } from './view-vaccination-center.component';

describe('ViewVaccinationCenterComponent', () => {
  let component: ViewVaccinationCenterComponent;
  let fixture: ComponentFixture<ViewVaccinationCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVaccinationCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
