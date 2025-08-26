import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardView } from './add-card-view';

describe('AddCardView', () => {
  let component: AddCardView;
  let fixture: ComponentFixture<AddCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
