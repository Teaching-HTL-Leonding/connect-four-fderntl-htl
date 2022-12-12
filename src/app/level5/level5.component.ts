import { Component } from '@angular/core';
import { BoardService } from '../level4/board.service';

@Component({
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.css'],
})
export class Level5Component {
  constructor(public board: BoardService) {}

  public getBoard(): number[][] {
    let boardContent = [];

    for (let rowIx = 0; rowIx < this.board.nrRows; rowIx++) {
      let row = [];
      for (let colIx = 0; colIx < this.board.nrCols; colIx++) {
        row.push(this.board.getPlayerIx(colIx, rowIx));
      }
      boardContent.push(row);
    }

    return boardContent;
  }
}
