import { Match } from "./Match";

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

    it("should return 0-0, advantage p1", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p1");
      expect(match.score()).toBe("0-0, advantage p1");
    });

    it("should return 0-0, advantage p2", () => {
      const match = new Match("p1", "p2");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      expect(match.score()).toBe("0-0, advantage p2");
    });

    it("should return 'p1 won the set!' when p1 wins 6 games and 2 more than p2", () => {
      const match = new Match("p1", "p2");

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 1st game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 2nd game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 3rd game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 4th game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 5th game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 6th game

      expect(match.score()).toBe("p1 won the set!");
    });

    it("should return 6-5, 0-0", () => {
      const match = new Match("p1", "p2");

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 1st game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 2nd game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 3rd game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 4th game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 5th game

      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      // 1st game

      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      // 2nd game

      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      // 3rd game

      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      // 4th game

      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      match.pointWonBy("p2");
      // 5th game

      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      match.pointWonBy("p1");
      // 6th game

      expect(match.score()).toBe("6-5, 0-0");
    });

    describe("Set", () => {
      it("should return p2 won the set!", () => {
        const match = new Match("p1", "p2");

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 1st game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 2nd game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 3rd game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 4th game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 5th game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 6th game

        expect(match.score()).toBe("p2 won the set!");
      });
    });

    describe("Tie-break", () => {
      let match: Match;
      beforeEach(() => {
        match = new Match("p1", "p2");

        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        // 1st game

        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        // 2nd game

        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        // 3rd game

        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        // 4th game

        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        // 5th game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 1st game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 2nd game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 3rd game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 4th game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 5th game

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        // 6th game

        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        // 6th game
      });

      it("should play tie break after 6th game and trailing wins the 7th game", () => {
        // tie break
        match.pointWonBy("p1");

        expect(match.score()).toBe("6-6, 1-0");
      });

      it("should return 6-6, 0-1", () => {
        // tie break
        match.pointWonBy("p2");

        expect(match.score()).toBe("6-6, 0-1");
      });

      it("should return 6-6, 6-6", () => {
        // tie break
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");

        expect(match.score()).toBe("6-6, 6-6");
      });

      it("should return 6-6, 7-6", () => {
        // tie break
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");

        match.pointWonBy("p1");

        expect(match.score()).toBe("6-6, 7-6");
      });

      it("should return 6-6, 10-10", () => {
        // tie break
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");

        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");
        match.pointWonBy("p2");

        match.pointWonBy("p1");
        match.pointWonBy("p2");

        match.pointWonBy("p1");
        match.pointWonBy("p2");

        match.pointWonBy("p1");
        match.pointWonBy("p2");

        match.pointWonBy("p1");
        match.pointWonBy("p2");

        expect(match.score()).toBe("6-6, 10-10");
      });

      it("should return p1 won the set!", () => {
        // tie break
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");
        match.pointWonBy("p1");

        expect(match.score()).toBe("p1 won the set!");
      });
    });
  });
});
