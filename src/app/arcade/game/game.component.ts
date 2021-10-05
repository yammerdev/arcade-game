import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../arcade.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() currentGame: Game | undefined;
  @Input() tokenBalance: number | undefined;
  @Output() playGameEvent = new EventEmitter<Game>();

  showErrorModal: boolean

  constructor() { 
    this.showErrorModal = false
  }

  ngOnInit(): void {
    console.log(this.currentGame)
  }

  ngOnChanges(): void {
    this.checkBalance()
  }

  checkBalance(): void {
    if (this.tokenBalance != undefined && this.currentGame != undefined){
        this.showErrorModal = this.tokenBalance < this.currentGame.cost
        console.log(this.showErrorModal)
    }
  }

  playGame() {
    if (!this.showErrorModal){
      this.playGameEvent.emit(this.currentGame)
    }
    
  }
}
