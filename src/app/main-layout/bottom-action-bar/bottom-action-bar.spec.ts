import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomActionBar } from './bottom-action-bar';

describe('BottomActionBar', () => {
  let component: BottomActionBar;
  let fixture: ComponentFixture<BottomActionBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomActionBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomActionBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
