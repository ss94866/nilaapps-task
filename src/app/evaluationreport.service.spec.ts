import { TestBed } from '@angular/core/testing';

import { EvaluationreportService } from './evaluationreport.service';

describe('EvaluationreportService', () => {
  let service: EvaluationreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
