import { TestBed } from '@angular/core/testing';

import { StorieCommentService } from './storie-comment.service';

describe('StorieCommentService', () => {
  let service: StorieCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorieCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
