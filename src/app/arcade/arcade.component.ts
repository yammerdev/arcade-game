import { Component, OnInit } from '@angular/core';
import { GameComponent } from './game/game.component';

interface game {
  name: string
  cost: number
  description: string
}

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})

export class ArcadeComponent implements OnInit {

  constructor() { }


  public GAME_LIST: game[] = [
    { 
      name: 'MINECRAFT', 
      cost: 1.5, 
      description: "test"
    },
    {
      name: 'Pac-Man', 
      cost: 1, 
      description: "test"
    },
    {
      name: 'League of Legends', 
      cost: 4, 
      description: "test"
    }
  ]

 // public selectedGame:game = null

  ngOnInit(): void {
  }

}
