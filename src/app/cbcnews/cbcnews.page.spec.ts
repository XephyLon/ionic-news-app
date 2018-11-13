import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBCNewsPage } from './cbcnews.page';

describe('CBCNewsPage', () => {
  let component: CBCNewsPage;
  let fixture: ComponentFixture<CBCNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBCNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBCNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
