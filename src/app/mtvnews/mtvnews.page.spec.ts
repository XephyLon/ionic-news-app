import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTVNewsPage } from './mtvnews.page';

describe('MTVNewsPage', () => {
  let component: MTVNewsPage;
  let fixture: ComponentFixture<MTVNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTVNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTVNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
