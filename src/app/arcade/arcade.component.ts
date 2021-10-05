import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})

export class ArcadeComponent implements OnInit {

  // Constant array of example games
  private GAME_LIST: Game[] = [
    {
      name: 'Pac-Man', 
      cost: 1, 
      description: "Eat all of the dots to win!"
    },
    { 
      name: 'Whack-A-Mole', 
      cost: 2, 
      description: "Whack the most moles to win!"
    },
    { 
      name: 'Minecraft', 
      cost: 3, 
      description: "Place some blocks ... build your empire ..."
    },
    {
      name: 'League of Legends', 
      cost: 4, 
      description: "This game isn't too fun...."
    }
  ]

  // The selected game
  public currentGame: Game | undefined

  // The ledger which holds all recorded transactions
  public transactionHistory : string[]

  //The users token balance
  public tokenBalance: number = 10

  constructor() {
    this.transactionHistory = []
    this.currentGame = this.GAME_LIST[0]
  }

  ngOnInit(): void {}

  /**
   * Update the current game by finding the matching game in the game list
   * 
   * @param event DOM event object containing the selected game option
   */
  changeGame(event: any): void {
    this.currentGame = this.GAME_LIST.find(game => game.name == event.target.value) || this.GAME_LIST[0]
  }

  /**
   * Deduct tokens necessary to play the game and add a log of the game to the ledger
   * 
   * @param game The game to be play
   */
  playGame(game: Game): void { 
    this.tokenBalance -= game.cost
    this.transactionHistory.push(`Play Game: ${game.name} Cost: ${game.cost}`)
  }

  /**
   * Add tokens to the current balance and add a log of the transaction to the ledger
   * 
   * @param transaction the purchase transaction containing
   */
  addTokens(transaction: Transaction){
    this.tokenBalance += transaction.tokens
    this.transactionHistory.push(`Purchase: ${transaction.tokens} token(s) for $${transaction.cost}`)
  }
 
}

/**
 * Information pertaining to a token purchase transaction
 */
export interface Transaction {
  tokens: number,
  cost: number
}

/**
 * Information related to an available game
 */
export interface Game {
  name: string
  cost: number
  description: string
}