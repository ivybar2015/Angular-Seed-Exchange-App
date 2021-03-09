import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerListApiDataComponent } from './flower-list-api-data.component';

describe('FlowerListApiDataComponent', () => {
  let component: FlowerListApiDataComponent;
  let fixture: ComponentFixture<FlowerListApiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerListApiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerListApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
