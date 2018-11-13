import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroPage } from './metro.page';

describe('MetroPage', () => {
  let component: MetroPage;
  let fixture: ComponentFixture<MetroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
