import { TestBed } from '@angular/core/testing';
import { PotService } from './pots.service';


/*//FlowersService */
describe('PotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotService = TestBed.get(PotService);
    expect(service).toBeTruthy();
  });
});
