import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCountDownComponent } from './time-count-down.component';

describe('TimeCountDownComponent', () => {
  let component: TimeCountDownComponent;
  let fixture: ComponentFixture<TimeCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCountDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
