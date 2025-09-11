import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoScreen } from './info-screen';

describe('InfoScreen', () => {
  let component: InfoScreen;
  let fixture: ComponentFixture<InfoScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
