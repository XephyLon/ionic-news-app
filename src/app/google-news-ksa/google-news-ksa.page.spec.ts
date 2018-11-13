import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleNewsKSAPage } from './google-news-ksa.page';

describe('GoogleNewsKSAPage', () => {
  let component: GoogleNewsKSAPage;
  let fixture: ComponentFixture<GoogleNewsKSAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleNewsKSAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleNewsKSAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
