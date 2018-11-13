import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxNewsPage } from './fox-news.page';

describe('FoxNewsPage', () => {
  let component: FoxNewsPage;
  let fixture: ComponentFixture<FoxNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
