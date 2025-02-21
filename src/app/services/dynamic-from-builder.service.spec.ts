import { TestBed } from '@angular/core/testing';

import { DynamicFromBuilderService } from './dynamic-from-builder.service';

describe('DynamicFromBuilderService', () => {
  let service: DynamicFromBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFromBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
