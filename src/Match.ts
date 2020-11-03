export interface ITennis {
  pointWonBy(player: string): void;
  score(): string;
}

export interface IGame extends ITennis {
  hasGameFinished(): boolean;
  whoWonGame(): string | undefined;
}

export interface ISet extends ITennis {
  hasSetFinished(): boolean;
  whoWonSet(): string | undefined;
}

export abstract class BaseTennis {
  constructor(protected p1: string, protected p2: string) {}
}

export abstract class Game extends BaseTennis implements IGame {
  protected p1Points: number;
  protected p2Points: number;

  private pointsDictionary = [0, 15, 30, 40];

  constructor(p1: string, p2: string) {
    super(p1, p2);

    this.p1Points = 0;
    this.p2Points = 0;
  }

  score(): string {
    return `${this.pointsDictionary[this.p1Points]}-${
      this.pointsDictionary[this.p2Points]
    }`;
  }

  abstract pointWonBy(player: string): void;
  abstract hasGameFinished(): boolean;
  abstract whoWonGame(): string | undefined;
}

export class NormalGame extends Game {
  pointWonBy(player: string): void {
    if (this.p1 === player) {
      this.p1Points++;
    } else {
      this.p2Points++;
    }
  }

  hasGameFinished(): boolean {
    // A game is won by the first player to have won at least 4 points in total and at least 2 points more than the opponent.
    const diffPoints = Math.abs(this.p1Points - this.p2Points);
    if ((this.p1Points >= 4 || this.p2Points >= 4) && diffPoints >= 2) {
      return true;
    }
    return false;
  }
  whoWonGame(): string | undefined {
    if (!this.hasGameFinished()) {
      return undefined;
    }
    if (this.p1Points > this.p2Points) {
      return this.p1;
    }
    return this.p2;
  }
}

export class TieBreak extends Game {
  /* 
  A tie-break, played under a separate set of rules, allows one player to win one more game and thus the set, to give a final set score of 7–6. 
  A tie-break is scored one point at a time. The tie-break game continues until one player wins seven points by a margin of two or more points. 
  Instead of being scored from 0, 15, 30, 40 like regular games, the score for a tie breaker goes up incrementally from 0 by 1. i.e a player's score will go from 0 to 1 to 2 to 3 …etc.
*/
  pointWonBy(player: string): void {
    throw new Error("Method not implemented.");
  }
  score(): string {
    throw new Error("Method not implemented.");
  }
  hasGameFinished(): boolean {
    throw new Error("Method not implemented.");
  }
  whoWonGame(): string | undefined {
    throw new Error("Method not implemented.");
  }
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
    throw new Error("Method not implemented.");
  }
  whoWonSet(): string | undefined {
    throw new Error("Method not implemented.");
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
      this.p1Games++;
    }
    this.games.push(new NormalGame(this.p1, this.p2));
  }
  score(): string {
    return `${this.p1Games}-${this.p2Games}, ${this.games[
      this.games.length - 1
    ].score()}`;
  }
}

export class Match extends BaseTennis implements ITennis {
  private set: Set;

  constructor(p1: string, p2: string) {
    super(p1, p2);
    this.set = new Set(p1, p2);
  }

  pointWonBy(player: string): void {
    if (player !== this.p1 && player !== this.p2) {
      throw new Error(`Invalid player`);
    }
    this.set.pointWonBy(player);
  }
  score(): string {
    return this.set.score();
  }
}
