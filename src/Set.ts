import { BaseTennis, ITennis } from "./Base";
import { Game, NormalGame, TieBreak } from "./Game";

export interface ISet extends ITennis {
  hasSetFinished(): boolean;
  whoWonSet(): string | undefined;
}
export class Set extends BaseTennis implements ISet {
  private games: Game[];
  private p1Games: number;
  private p2Games: number;

  constructor(p1: string, p2: string) {
    super(p1, p2);

    this.games = [];
    this.games.push(new NormalGame(p1, p2));

    this.p1Games = 0;
    this.p2Games = 0;
  }

  hasSetFinished(): boolean {
    const diffGames = Math.abs(this.p1Games - this.p2Games);
    if ((this.p1Games >= 6 || this.p2Games >= 6) && diffGames >= 2) {
      return true;
    }
    const currentGame = this.games[this.games.length - 1];
    if (currentGame instanceof TieBreak) {
      return currentGame.hasGameFinished();
    }
    return false;
  }
  whoWonSet(): string | undefined {
    if (this.p1Games > this.p2Games) {
      return this.p1;
    }
    return this.p2;
  }
  pointWonBy(player: string): void {
    const currentGame = this.games[this.games.length - 1];
    currentGame.pointWonBy(player);
    if (!currentGame.hasGameFinished()) {
      return;
    }
    if (this.p1 === currentGame.whoWonGame()) {
      this.p1Games++;
    } else {
      this.p2Games++;
    }
    if (this.games.length < 12) {
      this.games.push(new NormalGame(this.p1, this.p2));
    } else if (this.games.length === 12) {
      this.games.push(new TieBreak(this.p1, this.p2));
    }
  }
  score(): string {
    if (this.hasSetFinished()) {
      return `${this.whoWonSet()} won the set!`;
    }
    return `${this.p1Games}-${this.p2Games}, ${this.games[
      this.games.length - 1
    ].score()}`;
  }
}
