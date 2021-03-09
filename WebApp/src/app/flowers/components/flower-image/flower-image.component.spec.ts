import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerImageComponent } from './flower-image.component';

describe('FlowerImageComponent', () => {
  let component: FlowerImageComponent;
  let fixture: ComponentFixture<FlowerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
