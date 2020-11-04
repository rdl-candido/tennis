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

  protected abstract minPoints: number;

  constructor(p1: string, p2: string) {
    super(p1, p2);

    this.p1Points = 0;
    this.p2Points = 0;
  }

  pointWonBy(player: string): void {
    if (this.p1 === player) {
      this.p1Points++;
    } else {
      this.p2Points++;
    }
  }

  whoWonGame(): string | undefined {
    if (this.p1Points > this.p2Points) {
      return this.p1;
    }
    return this.p2;
  }

  hasGameFinished(): boolean {
    const diffPoints = Math.abs(this.p1Points - this.p2Points);
    if (
      (this.p1Points >= this.minPoints || this.p2Points >= this.minPoints) &&
      diffPoints >= 2
    ) {
      return true;
    }
    return false;
  }

  abstract score(): string;
}

export class NormalGame extends Game {
  protected minPoints = 4;
  private pointsDictionary = [0, 15, 30, 40];
  score(): string {
    const diffPoints = Math.abs(this.p1Points - this.p2Points);
    if (this.p1Points >= 3 && this.p2Points >= 3) {
      if (diffPoints === 0) return `deuce`;
      if (this.p1Points > this.p2Points) return `advantage ${this.p1}`;
      return `advantage ${this.p2}`;
    }
    return `${this.pointsDictionary[this.p1Points]}-${
      this.pointsDictionary[this.p2Points]
    }`;
  }
}

export class TieBreak extends Game {
  protected minPoints = 7;
  score(): string {
    return `${this.p1Points}-${this.p2Points}`;
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

export class Match extends BaseTennis implements ITennis {
  private set: Set;

  constructor(p1: string, p2: string) {
    super(p1, p2);
    this.set = new Set(p1, p2);
  }

  pointWonBy(player: string): void {
    this.set.pointWonBy(player);
  }
  score(): string {
    return this.set.score();
  }
}
