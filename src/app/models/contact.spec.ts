import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact('test', 'test', 'test')).toBeTruthy();
  });
});
