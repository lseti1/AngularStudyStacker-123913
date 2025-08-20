import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeckOptions } from './add-deck-options';

describe('AddDeckOptions', () => {
  let component: AddDeckOptions;
  let fixture: ComponentFixture<AddDeckOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeckOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeckOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
