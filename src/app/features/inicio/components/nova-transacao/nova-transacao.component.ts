import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoMovimentacao } from '../../enum/tipo-movimentacao.enum';
import { Store } from '@ngrx/store';
import { PostSaldoService } from '../../services/post-saldo-conta.service';
import { Movimentacao } from '../../model/finance.interface';
import { adicionarTransacao } from '../../store/transacao.actions';

@Component({
  selector: 'app-nova-transacao',
  templateUrl: './nova-transacao.component.html',
  styleUrl: './nova-transacao.component.scss'
})
export class NovaTransacaoComponent {
  transacaoForm: FormGroup;
  tipoMovimentacao = TipoMovimentacao

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private postSaldoService: PostSaldoService
  ){
    this.transacaoForm = this.fb.group({
      tipoMovimentacao: [null, Validators.required],
      valor: [0, [Validators.required, Validators.min(0.01)]]
    })
  }

  concluirTransacao():void{
    if(this.transacaoForm.valid){
      const novaTransacao: Movimentacao = {
        ...this.transacaoForm.value,
        id: this.generateId(),
        dataMovimentacao: new Date().toISOString().split('T')[0],
      }

      this.postSaldoService.adicionarTransacao(novaTransacao).subscribe((res) => {
        console.log('transacao concluida: ', res)

        this.store.dispatch(adicionarTransacao({ movimentacao: novaTransacao }));

        this.transacaoForm.reset()
      })
    }
  }

  private generateId(): number{
    return Math.floor(Math.random() * 10000)
  }
}
