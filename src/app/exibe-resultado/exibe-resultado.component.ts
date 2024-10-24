import { Component } from '@angular/core';
import { CombustivelService } from '../combustivel.service';

@Component({
  selector: 'app-exibe-resultado',
  templateUrl: './exibe-resultado.component.html',
  styleUrl: './exibe-resultado.component.css'
})
export class ExibeResultadoComponent {
  
 constructor(public cs: CombustivelService) {

 }

 obterClasse() {
  let res = this.cs.obterResultado()
  if (res) {
    if (res <= 0.7) {
      return 'alc'
    }
    else {
      return 'gas'
    }
  }
  return ''
 }
}

