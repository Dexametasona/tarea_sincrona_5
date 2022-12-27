import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  valor=0

  pulsar(simbolo:string){
    if (simbolo=='+'){
      this.valor++
    }
    else{
      if(this.valor>0){
        this.valor--
      }
    }
  }
  ngOnInit(): void {
  }

}
