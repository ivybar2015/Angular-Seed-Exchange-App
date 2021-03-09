import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerWaterComponent } from './flower-water.component';

describe('FlowerWaterComponent', () => {
  let component: FlowerWaterComponent;
  let fixture: ComponentFixture<FlowerWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
