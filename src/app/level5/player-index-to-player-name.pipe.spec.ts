import { PlayerIndexToPlayerNamePipe } from './player-index-to-player-name.pipe';

describe('PlayerIndexToPlayerNamePipe', () => {
  const pipe = new PlayerIndexToPlayerNamePipe();

  it('transforms player index 0 to ""', () => {
    expect(pipe.transform(0)).toBe('');
  });

  it('transforms player index 1 to "Red"', () => {
    expect(pipe.transform(1)).toBe('Red');
  });

  it('transforms player index 2 to "Blue"', () => {
    expect(pipe.transform(2)).toBe('Blue');
  });

  it('throws an error when transforming player index -1', () => {
    expect(() => pipe.transform(-1)).toThrow();
  });

  it('throws an error when transforming player index 3', () => {
    expect(() => pipe.transform(3)).toThrow();
  });
});
