import { Player } from "./Player";

export abstract class TennisGame {
  protected player1: Player;
  protected player2: Player;
  protected player1Points: number;
  protected player2Points: number;
  public gameWinner: Player | null;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Points = 0;
    this.player2Points = 0;
    this.gameWinner = null;
  }
  public abstract pointWonBy(player: Player): void;
  public abstract score(): string;
}
