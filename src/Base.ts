export interface ITennis {
  pointWonBy(player: string): void;
  score(): string;
}

export abstract class BaseTennis {
  constructor(protected p1: string, protected p2: string) {}
}
