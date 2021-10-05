import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../arcade.component';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  @Output() addBalanceEvent = new EventEmitter<Transaction>();

  tokenFieldValue: number | undefined;

  constructor() { 
  }

  ngOnInit(): void { 
    
  }

  onFieldChange(event: Event){
    const { value } = event.target as HTMLInputElement;
    this.tokenFieldValue = parseFloat((parseFloat(value) * .25).toFixed(2))
  }

  purchaseTokens(amount: string){
    if (this.tokenFieldValue) {
      console.log(this.tokenFieldValue)
      this.addBalanceEvent.emit({tokens: parseInt(amount), cost: this.tokenFieldValue})    
    }
    
  }

}
