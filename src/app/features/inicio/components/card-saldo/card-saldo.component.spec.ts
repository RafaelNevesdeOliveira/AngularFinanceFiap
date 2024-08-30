import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing'; 
import { CardSaldoComponent } from './card-saldo.component';
import { MatIconModule } from '@angular/material/icon';
import { selectSaldoTotal } from '../../store/transacao.selectors';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';

fdescribe('CardSaldoComponent', () => {
  let component: CardSaldoComponent;
  let fixture: ComponentFixture<CardSaldoComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [CardSaldoComponent],
      providers: [provideMockStore({ selectors: [{ selector: selectSaldoTotal, value: 1000 }] })]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSaldoComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as MockStore
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir a data atual formatada corretamente', () => {
    const dataElement = fixture.debugElement.query(By.css('.card-saldo__left p'));
    
    const dataAtual = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });

    expect(dataElement.nativeElement.textContent.trim()).toBe(dataAtual)
  })

  it('deve mostrar o saldo quando mostrarSaldo é verdadeiro', () => {
    component.mostrarSaldo = true
    const saldoEsperado = 1000;

    mockStore.overrideSelector(selectSaldoTotal, saldoEsperado); 

    fixture.detectChanges(); 
    const saldoElement = fixture.debugElement.query(By.css('.card-saldo__right p:nth-child(4)')); 

    const saldoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(saldoEsperado); 

    expect(saldoElement.nativeElement.textContent.trim()).toBe('R$1,000.00')
  })

});
