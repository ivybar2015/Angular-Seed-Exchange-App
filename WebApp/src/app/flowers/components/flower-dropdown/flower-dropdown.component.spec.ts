import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDropdownComponent } from './flower-dropdown.component';

describe('FlowerDropdownComponent', () => {
  let component: FlowerDropdownComponent;
  let fixture: ComponentFixture<FlowerDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
