import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerShopComponent } from './flower-shop.component';

describe('FlowerShopComponent', () => {
  let component: FlowerShopComponent;
  let fixture: ComponentFixture<FlowerShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
