import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeckView } from './edit-deck-view';

describe('EditDeckView', () => {
  let component: EditDeckView;
  let fixture: ComponentFixture<EditDeckView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeckView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeckView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
