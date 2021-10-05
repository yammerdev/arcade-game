import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  @Output() addBalanceEvent  = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  purchaseTokens(amount: string){
    this.addBalanceEvent.emit(parseInt(amount))
  }

}
