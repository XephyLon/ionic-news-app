import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalNewsTodayPage } from './medical-news-today.page';

describe('MedicalNewsTodayPage', () => {
  let component: MedicalNewsTodayPage;
  let fixture: ComponentFixture<MedicalNewsTodayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalNewsTodayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalNewsTodayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
