import { BoardService } from "./board.service";

describe('Board service', () => {
  let boardService: BoardService;

  beforeEach(() => {
    boardService = new BoardService();
  });

  it('should have 6 rows', () => {
    expect(boardService.nrRows).toBe(6);
  });

  it('should have 7 columns', () => {
    expect(boardService.nrCols).toBe(7);
  });

  it('has 0 as the default value for currentWinnerIndex', () => {
    expect(boardService.currentWinnerIndex).toBe(0);
  });

  it('has 1 as the default value for currentPlayerIndex', () => {
    expect(boardService.currentPlayerIndex).toBe(1);
  });

  it('can drop some coins', () => {
    boardService.drop(0);
    boardService.drop(0);

    expect(boardService.getPlayerIx(0, 5)).toBe(1);
    expect(boardService.getPlayerIx(0, 4)).toBe(2);
  });

  it('finds a winner', () => {
    for (let i = 0; i < 4; i++) {
      boardService.drop(0);

      if (i < 3) {
        expect(boardService.currentWinnerIndex).toBe(0);
        boardService.drop(1);
        expect(boardService.currentWinnerIndex).toBe(0);
      }
    }

    expect(boardService.currentWinnerIndex).toBe(1);
  });
});
