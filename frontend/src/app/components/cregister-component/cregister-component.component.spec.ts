import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CregisterComponentComponent } from './cregister-component.component';

describe('CregisterComponentComponent', () => {
  let component: CregisterComponentComponent;
  let fixture: ComponentFixture<CregisterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CregisterComponentComponent]
    });
    fixture = TestBed.createComponent(CregisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
