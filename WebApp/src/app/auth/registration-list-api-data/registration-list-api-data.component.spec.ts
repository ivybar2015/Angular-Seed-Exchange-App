import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationListApiDataComponent } from './registration-list-api-data.component';

describe('RegistrationListApiDataComponent', () => {
  let component: RegistrationListApiDataComponent;
  let fixture: ComponentFixture<RegistrationListApiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationListApiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationListApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
