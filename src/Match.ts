import { BaseTennis, ITennis } from "./Base";
import { Set } from "./Set";

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
