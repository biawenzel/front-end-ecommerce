import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceAppComponent } from './ecommerce-app.component';

describe('EcommerceAppComponent', () => {
  let component: EcommerceAppComponent;
  let fixture: ComponentFixture<EcommerceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
