import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsPage } from './hacker-news.page';

describe('HackerNewsPage', () => {
  let component: HackerNewsPage;
  let fixture: ComponentFixture<HackerNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
