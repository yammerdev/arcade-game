import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArcadeComponent } from './arcade/arcade.component';
import { GameComponent } from './arcade/game/game.component';
import { TokensComponent } from './arcade/tokens/tokens.component';
import { LedgerComponent } from './arcade/ledger/ledger.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ArcadeComponent,
    TokensComponent,
    LedgerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
