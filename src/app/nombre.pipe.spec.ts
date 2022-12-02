import { NombrePipe } from './nombre.pipe';

describe('NombrePipe', () => {
  it('create an instance', () => {
    const pipe = new NombrePipe();
    expect(pipe).toBeTruthy();
  });
});
