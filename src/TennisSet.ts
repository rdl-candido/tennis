import { TennisGame } from "./TennisGame";
import { TieBreakGame } from "./TieBreakGame";
import { NormalGame } from "./NormalGame";
import { Player } from "./Player";

export class TennisSet {
  private player1: Player;
  private player2: Player;
  private player1Games: number;
  private player2Games: number;
  private games: TennisGame[];
  private currentGame: TennisGame;
  public setWinner: Player | null;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Games = 0;
    this.player2Games = 0;
    this.games = [];
    this.currentGame = new NormalGame(player1, player2);
    this.setWinner = null;
  }
  public score(): string {
    if (this.setWinner) {
      return `${this.player1Games}-${this.player2Games}`;
    }
    return [
      `${this.player1Games}-${this.player2Games}`,
      this.currentGame.score()
    ]
      .filter(String)
      .join(`, `);
  }
  public pointWonBy(player: Player): void {
    if (this.setWinner) {
      throw new Error(`This set is finished`);
    }
    this.currentGame.pointWonBy(player);
    if (this.currentGame.gameWinner === null) {
      return;
    }
    if (this.currentGame.gameWinner === this.player1) {
      this.player1Games++;
    }
    else {
      this.player2Games++;
    }
    this.games.push(this.currentGame);
    if (this.player1Games >= 6 || this.player2Games >= 6) {
      const gamesDifference = Math.abs(this.player1Games - this.player2Games);
      if (gamesDifference >= 2 || this.currentGame instanceof TieBreakGame) {
        this.setWinner = this.player1Games > this.player2Games ? this.player1 : this.player2;
      }
      else if (gamesDifference === 1) {
        this.currentGame = new NormalGame(this.player1, this.player2);
      }
      else if (gamesDifference === 0) {
        this.currentGame = new TieBreakGame(this.player1, this.player2);
      }
    }
    else {
      this.currentGame = new NormalGame(this.player1, this.player2);
    }
  }
}
