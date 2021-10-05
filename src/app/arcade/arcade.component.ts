import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})

export class ArcadeComponent implements OnInit {

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

  @Output() someEvent = new EventEmitter();

  public currentGame: Game | undefined
  public transactionHistory : string[]
  tokenBalance: number = 10

  constructor() {
    this.transactionHistory = []
    this.currentGame = this.GAME_LIST[0]
  }

  ngOnInit(): void {}

  changeGame(event: any): void {
    this.currentGame = this.GAME_LIST.find(game => game.name == event.target.value) || this.GAME_LIST[0]
    console.log(this.currentGame)
  }

  playGame(game: Game): void { 
    this.tokenBalance -= game.cost
    this.transactionHistory.push(`Play Game: ${game.name} Cost: ${game.cost}`)
  }

  addTokens(transaction: Transaction){
    console.log(transaction)
    this.tokenBalance += transaction.tokens
    this.transactionHistory.push(`Purchase: ${transaction.tokens} tokens for $${transaction.cost}`)
  }

  getBalance(): number {
    return this.tokenBalance;
  }
 
}

export interface Transaction {
  tokens: number,
  cost: number
}

export interface Game {
  name: string
  cost: number
  description: string
}