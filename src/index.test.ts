import { Match } from "./Match"

describe('Tennis', () => {

  test(`Should return "0-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    const score = sut.score();
    expect(score).toBe(`0-0`);
  })

  test(`Should return "0-0, 15-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    const score = sut.score();
    expect(score).toBe(`0-0, 15-0`);
  })

  test(`Should return "0-0, 30-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    const score = sut.score();
    expect(score).toBe(`0-0, 30-0`);
  })

  test(`Should return "0-0, 40-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    const score = sut.score();
    expect(score).toBe(`0-0, 40-0`);
  })

  test(`Should return "1-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    const score = sut.score();
    expect(score).toBe(`1-0`);
  })

  test(`Should return "0-0, 0-15"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p2`);
    const score = sut.score();
    expect(score).toBe(`0-0, 0-15`);
  })

  test(`Should return "0-0, 40-30"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    const score = sut.score();
    expect(score).toBe(`0-0, 40-30`);
  })

  test(`Should return "0-0, 40-40"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    const score = sut.score();
    expect(score).toBe(`0-0, Deuce`);
  })

  test(`Should return "0-0, Advantage p1"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p1`);
    const score = sut.score();
    expect(score).toBe(`0-0, Advantage p1`);
  })

  test(`Should return "0-0, Deuce"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    const score = sut.score();
    expect(score).toBe(`0-0, Deuce`);
  })

  test(`Should return "0-1"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    const score = sut.score();
    expect(score).toBe(`0-1`);
  })

  test(`Should return "5-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 1-0
    
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 2-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 3-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 4-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 5-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-1

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-2

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-3

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-4

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-5

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-5

    const score = sut.score();
    expect(score).toBe(`6-5`);
  })

  test(`Should return "6-6"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 1-0
    
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 2-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 3-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 4-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 5-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-1

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-2

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-3

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-4

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-5

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-5

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 6-6

    const score = sut.score();
    expect(score).toBe(`6-6`);
  })

  test(`Should return "6-6, 1-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 1-0
    
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 2-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 3-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 4-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 5-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-1

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-2

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-3

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-4

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-5

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-5

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 6-6

    sut.pointWonBy(`p1`);

    const score = sut.score();
    expect(score).toBe(`6-6, 1-0`);
  })

  test(`Should return "6-6, 6-0"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 1-0
    
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 2-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 3-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 4-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 5-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-1

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-2

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-3

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-4

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-5

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-5

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 6-6

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-6, 6-0

    const score = sut.score();
    expect(score).toBe(`6-6, 6-0`);
  })

  test(`Should return "6-6, 6-6"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 1-0
    
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 2-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 3-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 4-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 5-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-1

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-2

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-3

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-4

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-5

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-5

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 6-6

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-6, 6-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);

    const score = sut.score();
    expect(score).toBe(`6-6, 6-6`);
  })

  test(`Should return "7-6"`, () => {
    const sut = new Match(`p1`, `p2`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 1-0
    
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 2-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 3-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 4-0

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 5-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-1

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-2

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-3

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-4

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 5-5

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-5

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`); // 6-6

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`); // 6-6, 6-0

    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);
    sut.pointWonBy(`p2`);

    sut.pointWonBy(`p1`);
    sut.pointWonBy(`p1`);

    const score = sut.score();
    expect(score).toBe(`7-6`);
  })

})