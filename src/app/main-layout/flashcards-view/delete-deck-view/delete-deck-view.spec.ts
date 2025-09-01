import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeckView } from './delete-deck-view';

describe('DeleteDeckView', () => {
  let component: DeleteDeckView;
  let fixture: ComponentFixture<DeleteDeckView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDeckView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDeckView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
