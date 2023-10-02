import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageBalanceComponent } from './average-balance.component';

describe('AverageBalanceComponent', () => {
  let component: AverageBalanceComponent;
  let fixture: ComponentFixture<AverageBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageBalanceComponent]
    });
    fixture = TestBed.createComponent(AverageBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
