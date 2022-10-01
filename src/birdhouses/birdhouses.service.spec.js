import { Test } from '@nestjs/testing';
import { BirdhousesService } from './birdhouses.service';

describe('BirdhousesService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BirdhousesService],
    }).compile();

    service = module.get(BirdhousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
