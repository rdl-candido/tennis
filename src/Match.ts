import { Player } from "./Player";
import { TennisSet } from "./TennisSet";

export class Match {
  private player1: Player;
  private player2: Player;
  public set: TennisSet;
  constructor(player1: string, player2: string) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.set = new TennisSet(this.player1, this.player2);
  }
  score(): string {
    return this.set.score();
  }
  pointWonBy(player: string): void {
    if (this.player1.name === player) {
      this.set.pointWonBy(this.player1);
    } else if (this.player2.name === player) {
      this.set.pointWonBy(this.player2);
    } else {
      throw new Error(`Invalid player`);
    }
  }
}
