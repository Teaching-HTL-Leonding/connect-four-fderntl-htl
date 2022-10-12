import { TestBed } from "@angular/core/testing";
import { BoardService } from "./board.service";
import { Level4Component } from "./level4.component";

describe('Level 4', () => {
  let component: Level4Component;
  let boardService: BoardService;

  beforeEach(() => {
    boardService = new BoardService();

    TestBed.configureTestingModule({
      declarations: [Level4Component],
      providers: [{ provide: BoardService, useValue: boardService }]
    });
    const fixture = TestBed.createComponent(Level4Component);
    component = fixture.componentInstance;
  });

  it('should get correct CSS class', () => {
    boardService.drop(0);
    expect(component.getStyle(0, 5)).toBe('occupied-1');
  });

  it('should get correct CSS classes', () => {
    boardService.drop(0);
    expect(component.getStyle(0, 5)).toBe('occupied-1');
    boardService.drop(0);
    expect(component.getStyle(0, 4)).toBe('occupied-2');
    boardService.drop(0);
    expect(component.getStyle(0, 3)).toBe('occupied-1');
  });

  it('should get the corret winner name', () => {
    for (let i = 0; i < 4; i++) {
      boardService.drop(0);
      if (i < 3) {
        boardService.drop(1);
      }
    }
    expect(component.getWinnerName()).toBe('Red');
  });
});
