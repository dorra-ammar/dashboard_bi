import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDesignComponent } from './chart-design.component';

describe('ChartDesignComponent', () => {
  let component: ChartDesignComponent;
  let fixture: ComponentFixture<ChartDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
