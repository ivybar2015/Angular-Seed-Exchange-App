import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerSeedComponent } from './flower-seed.component';

describe('FlowerSeedComponent', () => {
  let component: FlowerSeedComponent;
  let fixture: ComponentFixture<FlowerSeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerSeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
