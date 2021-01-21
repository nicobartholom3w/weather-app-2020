import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastSlotComponent } from './forecast-slot.component';

describe('ForecastSlotComponent', () => {
  let component: ForecastSlotComponent;
  let fixture: ComponentFixture<ForecastSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
