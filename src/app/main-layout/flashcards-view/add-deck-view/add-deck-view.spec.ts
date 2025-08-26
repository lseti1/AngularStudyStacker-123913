import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeckView } from './add-deck-view';

describe('AddDeckView', () => {
  let component: AddDeckView;
  let fixture: ComponentFixture<AddDeckView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeckView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeckView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
