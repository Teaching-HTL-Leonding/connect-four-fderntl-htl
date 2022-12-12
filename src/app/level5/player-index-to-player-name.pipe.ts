import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerIndexToPlayerName'
})
export class PlayerIndexToPlayerNamePipe implements PipeTransform {
  private _playerNames: string[] = ['', 'Red', 'Blue'];

  transform(playerIx: number, ...args: unknown[]): string {
    if (playerIx < 0 || playerIx >= this._playerNames.length) {
      throw new Error('Invalid player number');
    }

    return this._playerNames[playerIx];
  }

}
