import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotListApiDataComponent } from './pot-list-api-data.component';

describe('PotListApiDataComponent', () => {
  let component: PotListApiDataComponent;
  let fixture: ComponentFixture<PotListApiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotListApiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotListApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
