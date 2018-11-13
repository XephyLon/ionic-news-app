import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashablePage } from './mashable.page';

describe('MashablePage', () => {
  let component: MashablePage;
  let fixture: ComponentFixture<MashablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
