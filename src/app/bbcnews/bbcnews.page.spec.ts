import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBCNewsPage } from './bbcnews.page';

describe('BBCNewsPage', () => {
  let component: BBCNewsPage;
  let fixture: ComponentFixture<BBCNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
