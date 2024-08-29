import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaldoComponent } from './card-saldo.component';

describe('CardSaldoComponent', () => {
  let component: CardSaldoComponent;
  let fixture: ComponentFixture<CardSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSaldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
