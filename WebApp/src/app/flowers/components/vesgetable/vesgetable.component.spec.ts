import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesgetableComponent } from './vesgetable.component';

describe('VesgetableComponent', () => {
  let component: VesgetableComponent;
  let fixture: ComponentFixture<VesgetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesgetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesgetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
