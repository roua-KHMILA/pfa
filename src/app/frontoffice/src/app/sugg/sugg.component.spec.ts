import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggComponent } from './sugg.component';

describe('SuggComponent', () => {
  let component: SuggComponent;
  let fixture: ComponentFixture<SuggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggComponent]
    });
    fixture = TestBed.createComponent(SuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
