import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSelectionDialogComponent } from './mode-selection-dialog.component';

describe('ModeSelectionDialogComponent', () => {
  let component: ModeSelectionDialogComponent;
  let fixture: ComponentFixture<ModeSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
