import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IGNPage } from './ign.page';

describe('IGNPage', () => {
  let component: IGNPage;
  let fixture: ComponentFixture<IGNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IGNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IGNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
