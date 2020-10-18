import { TennisGame } from "./TennisGame";
import { Player } from "./Player";

export class TieBreakGame extends TennisGame {
  constructor(player1: Player, player2: Player) {
    super(player1, player2);
  }
  public pointWonBy(player: Player): void {
    if (this.gameWinner) {
      throw new Error(`This game is finished`);
    }
    if (player === this.player1) {
      this.player1Points++;
    } else {
      this.player2Points++;
    }
    if (this.player1Points >= 7 || this.player2Points >= 7) {
      const pointsDifference = Math.abs(
        this.player1Points - this.player2Points
      );
      if (pointsDifference >= 2) {
        this.gameWinner =
          this.player1Points > this.player2Points ? this.player1 : this.player2;
      }
    }
  }
  public score(): string {
    if (this.player1Points === 0 && this.player2Points === 0) {
      return ``;
    }
    return `${this.player1Points}-${this.player2Points}`;
  }
}
