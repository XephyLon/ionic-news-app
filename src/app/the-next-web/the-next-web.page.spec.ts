import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNextWebPage } from './the-next-web.page';

describe('TheNextWebPage', () => {
  let component: TheNextWebPage;
  let fixture: ComponentFixture<TheNextWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheNextWebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNextWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
