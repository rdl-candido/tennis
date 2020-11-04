import { BaseTennis } from "./Base";

export abstract class Game extends BaseTennis {
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
