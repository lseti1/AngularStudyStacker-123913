import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardView } from './delete-card-view';

describe('DeleteCardView', () => {
  let component: DeleteCardView;
  let fixture: ComponentFixture<DeleteCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
