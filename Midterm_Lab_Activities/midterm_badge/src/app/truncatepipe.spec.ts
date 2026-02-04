import { TestBed } from '@angular/core/testing';

import { TruncatePipe } from './truncatepipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = TestBed.inject(TruncatePipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });
});
