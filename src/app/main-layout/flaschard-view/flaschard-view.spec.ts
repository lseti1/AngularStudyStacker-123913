import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaschardView } from './flaschard-view';

describe('FlaschardView', () => {
  let component: FlaschardView;
  let fixture: ComponentFixture<FlaschardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlaschardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlaschardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
