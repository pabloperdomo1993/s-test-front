import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuoteComponent } from './modal-quote.component';

describe('ModalQuoteComponent', () => {
  let component: ModalQuoteComponent;
  let fixture: ComponentFixture<ModalQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
