import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css'],
})
export class Level4Component {
  private _playerNames: string[];

  constructor(public board: BoardService) {
    this._playerNames = ['', 'Red', 'Blue'];
  }

  public getWinnerName(): string {
    return this._playerNames[this.board.currentWinnerIndex];
  }

  public getStyle(colIx: number, rowIx: number): string {
    let playerIx = this.board.getPlayerIx(colIx, rowIx);

    if (playerIx === 0) {
      return '';
    }

    return `occupied-${playerIx}`;
  }

  public getStyles(): string[][] {
    let styles: string[][] = [];
    for (let rowIx = 0; rowIx < this.board.nrRows; rowIx++) {
      styles[rowIx] = [];
      for (let colIx = 0; colIx < this.board.nrCols; colIx++) {
        styles[rowIx][colIx] = this.getStyle(colIx, rowIx);
      }
    }

    return styles;
  }
}
