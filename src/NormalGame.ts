import { TennisGame } from "./TennisGame";
import { Player } from "./Player";

export class NormalGame extends TennisGame {
  constructor(player1: Player, player2: Player) {
    super(player1, player2);
  }
  public pointWonBy(player: Player): void {
    if (this.gameWinner) {
      throw new Error(`This game is finished`);
    }
    if (player === this.player1) {
      this.player1Points++;
    }
    else {
      this.player2Points++;
    }
    if (this.player1Points >= 4 || this.player2Points >= 4) {
      const pointsDifference = Math.abs(this.player1Points - this.player2Points);
      if (pointsDifference >= 2) {
        this.gameWinner = this.player1Points > this.player2Points ? this.player1 : this.player2;
      }
    }
  }
  public score(): string {
    const points = [0, 15, 30, 40];
    if (this.player1Points >= 3 && this.player2Points >= 3) {
      if (this.player1Points === this.player2Points) {
        return `Deuce`;
      }
      if (this.player1Points > this.player2Points) {
        return `Advantage ${this.player1.name}`;
      }
      return `Advantage ${this.player2.name}`;
    }
    if (this.player1Points === 0 && this.player2Points === 0) {
      return ``;
    }
    return `${points[this.player1Points]}-${points[this.player2Points]}`;
  }
}
