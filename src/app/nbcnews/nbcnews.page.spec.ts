import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBCNewsPage } from './nbcnews.page';

describe('NBCNewsPage', () => {
  let component: NBCNewsPage;
  let fixture: ComponentFixture<NBCNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBCNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBCNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
