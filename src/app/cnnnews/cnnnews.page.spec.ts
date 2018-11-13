import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNNNewsPage } from './cnnnews.page';

describe('CNNNewsPage', () => {
  let component: CNNNewsPage;
  let fixture: ComponentFixture<CNNNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNNNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNNNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
