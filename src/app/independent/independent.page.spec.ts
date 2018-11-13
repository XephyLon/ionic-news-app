import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentPage } from './independent.page';

describe('IndependentPage', () => {
  let component: IndependentPage;
  let fixture: ComponentFixture<IndependentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
