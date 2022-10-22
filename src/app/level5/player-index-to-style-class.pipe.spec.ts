import { PlayerIndexToStyleClassPipe } from './player-index-to-style-class.pipe';

describe('PlayerNameToStyleClassPipe', () => {
  const pipe = new PlayerIndexToStyleClassPipe();

  it('transforms player index 0 to ""', () => {
    expect(pipe.transform(0)).toBe('');
  });

  it('transforms player index 1 to "occupied-1"', () => {
    expect(pipe.transform(1)).toBe('occupied-1');
  });

  it('transforms player index 2 to "occupied-2"', () => {
    expect(pipe.transform(2)).toBe('occupied-2');
  });

  it('throws an error when transforming player index -1', () => {
    expect(() => pipe.transform(-1)).toThrow();
  });

  it('throws an error when transforming player index 3', () => {
    expect(() => pipe.transform(3)).toThrow();
  });
});
