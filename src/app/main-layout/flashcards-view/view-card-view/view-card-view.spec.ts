import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardView } from './view-card-view';

describe('ViewCardView', () => {
  let component: ViewCardView;
  let fixture: ComponentFixture<ViewCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
