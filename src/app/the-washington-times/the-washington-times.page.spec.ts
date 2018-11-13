import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWashingtonTimesPage } from './the-washington-times.page';

describe('TheWashingtonTimesPage', () => {
  let component: TheWashingtonTimesPage;
  let fixture: ComponentFixture<TheWashingtonTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWashingtonTimesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWashingtonTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
