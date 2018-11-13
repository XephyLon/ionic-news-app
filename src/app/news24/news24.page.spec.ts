import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News24Page } from './news24.page';

describe('News24Page', () => {
  let component: News24Page;
  let fixture: ComponentFixture<News24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News24Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
