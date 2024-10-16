import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomeComponent } from './c-home.component';

describe('CHomeComponent', () => {
  let component: CHomeComponent;
  let fixture: ComponentFixture<CHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CHomeComponent]
    });
    fixture = TestBed.createComponent(CHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
