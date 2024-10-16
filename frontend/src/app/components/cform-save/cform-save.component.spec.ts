import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CformSaveComponent } from './cform-save.component';

describe('CformSaveComponent', () => {
  let component: CformSaveComponent;
  let fixture: ComponentFixture<CformSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CformSaveComponent]
    });
    fixture = TestBed.createComponent(CformSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
