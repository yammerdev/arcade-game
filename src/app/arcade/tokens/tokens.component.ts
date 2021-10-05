import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../arcade.component';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  //Output to emit purchase events
  @Output() addBalanceEvent = new EventEmitter<Transaction>();

  // The dollar cost of the number of tokens currently in the input
  tokenFieldCost: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  /**
   * When a new character is typed into the token field, parse it to an integer and update tokenFieldCost
   * 
   * @param event DOM event element which has an input value
   */
  onFieldChange(event: Event){
    const { value } = event.target as HTMLInputElement;
    this.tokenFieldCost = parseFloat((parseFloat(value) * .25).toFixed(2))
  }

  /**
   * Emit the transaction object to the Arcade component so we can update the token balance
   * 
   * @param amount the amount of tokens to purchase
   */
  purchaseTokens(amount: string){
    if (this.tokenFieldCost) {
      this.addBalanceEvent.emit(
          { // the transaction object
            tokens: parseInt(amount), 
            cost: this.tokenFieldCost
          }
        )    
    }
    
  }

}
