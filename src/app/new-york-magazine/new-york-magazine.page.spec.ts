import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYorkMagazinePage } from './new-york-magazine.page';

describe('NewYorkMagazinePage', () => {
  let component: NewYorkMagazinePage;
  let fixture: ComponentFixture<NewYorkMagazinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewYorkMagazinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewYorkMagazinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
