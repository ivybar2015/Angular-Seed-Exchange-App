import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerPotComponent } from './flower-pot.component';

describe('FlowerPotComponent', () => {
  let component: FlowerPotComponent;
  let fixture: ComponentFixture<FlowerPotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerPotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
