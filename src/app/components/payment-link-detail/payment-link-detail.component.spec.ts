import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLinkDetailComponent } from './payment-link-detail.component';

describe('PaymentLinkDetailComponent', () => {
  let component: PaymentLinkDetailComponent;
  let fixture: ComponentFixture<PaymentLinkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentLinkDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentLinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
