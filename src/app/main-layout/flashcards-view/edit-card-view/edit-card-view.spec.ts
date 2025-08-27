import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardView } from './edit-card-view';

describe('EditCardView', () => {
  let component: EditCardView;
  let fixture: ComponentFixture<EditCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
