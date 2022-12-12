import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerIndexToStyleClass'
})
export class PlayerIndexToStyleClassPipe implements PipeTransform {

  transform(playerIx: number, ...args: unknown[]): string {
    if (playerIx === 0) {
      return '';
    }
    if (playerIx < 1 || playerIx > 2) {
      throw new Error('Invalid player number');
    }

    return `occupied-${playerIx}`
  }
}
