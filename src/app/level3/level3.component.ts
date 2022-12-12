import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

@Component({
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})
export class Level3Component extends Level2Component {

  constructor() {
    super();
    this.nrCols = 7;
    this.nrRows = 6;
    this.restart();
  }

  public getStyles(): string[][] {
    let styles: string[][] = [];
    for (let rowIx = 0; rowIx < this.nrRows; rowIx++) {
      styles[rowIx] = [];
      for (let colIx = 0; colIx < this.nrCols; colIx++) {
        styles[rowIx][colIx] = this.getStyle(colIx, rowIx);
      }
    }

    return styles;
  }
}
