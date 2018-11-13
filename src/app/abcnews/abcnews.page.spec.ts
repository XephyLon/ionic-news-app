import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCNewsPage } from './abcnews.page';

describe('ABCNewsPage', () => {
  let component: ABCNewsPage;
  let fixture: ComponentFixture<ABCNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABCNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABCNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
