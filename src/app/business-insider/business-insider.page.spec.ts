import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInsiderPage } from './business-insider.page';

describe('BusinessInsiderPage', () => {
  let component: BusinessInsiderPage;
  let fixture: ComponentFixture<BusinessInsiderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInsiderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInsiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
