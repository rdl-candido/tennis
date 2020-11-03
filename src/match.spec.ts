import { Match } from "./match";

describe("Match", () => {
  describe("Score", () => {
    it("should return 0-0, 0-0 when nobody scored yet", () => {
      const match = new Match("p1", "p2");
      expect(match.score()).toBe("0-0, 0-0");
    });

    it("should return 0-0, 15-0 when p1 scored first", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      expect(match.score()).toBe("0-0, 15-0");
    });

    it("should return 0-0, 30-0 when p1 scored 2x", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      expect(match.score()).toBe("0-0, 30-0");
    });

    it("should return 0-0, 40-0 when p1 scored 3x", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      expect(match.score()).toBe("0-0, 40-0");
    });

    it("should return 1-0, 0-0 when p1 won the first game", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      expect(match.score()).toBe("1-0, 0-0");
    });

    it("should return 0-0, deuce", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      expect(match.score()).toBe("0-0, deuce");
    });
  });
});
