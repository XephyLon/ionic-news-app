import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRadarPage } from './tech-radar.page';

describe('TechRadarPage', () => {
  let component: TechRadarPage;
  let fixture: ComponentFixture<TechRadarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechRadarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechRadarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
