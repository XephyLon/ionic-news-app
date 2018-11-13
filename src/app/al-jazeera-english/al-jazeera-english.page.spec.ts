import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlJazeeraEnglishPage } from './al-jazeera-english.page';

describe('AlJazeeraEnglishPage', () => {
  let component: AlJazeeraEnglishPage;
  let fixture: ComponentFixture<AlJazeeraEnglishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlJazeeraEnglishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlJazeeraEnglishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
