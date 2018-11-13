import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalGeographicPage } from './national-geographic.page';

describe('NationalGeographicPage', () => {
  let component: NationalGeographicPage;
  let fixture: ComponentFixture<NationalGeographicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalGeographicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalGeographicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
