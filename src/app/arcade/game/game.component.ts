import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../arcade.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //The selected game
  @Input() currentGame: Game | undefined;

  //Users token balance
  @Input() tokenBalance: number | undefined;

  //Output to emit game event
  @Output() playGameEvent = new EventEmitter<Game>();

  // If the user has enough tokens to play the game
  public canPlayGame: boolean

  constructor() { 
    this.canPlayGame = false
  }

  ngOnInit(): void { }

  /**
   * Whenever tokenBalance or currentGame changes, recheck the balance to validate if the user has enough tokens to play
   */
  ngOnChanges(): void {
    this.checkBalance()
  }

  /**
   * Check if the user has the balance to play the game
   */
  checkBalance(): void {
    if (this.tokenBalance != undefined && this.currentGame != undefined){
        this.canPlayGame = this.tokenBalance < this.currentGame.cost
    }
  }

  /**
   * Emit the play game event to arcade if the user can play
   */
  playGame() {
    if (!this.canPlayGame){
      this.playGameEvent.emit(this.currentGame)
    }
    
  }
}
