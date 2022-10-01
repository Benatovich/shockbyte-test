import { Test } from '@nestjs/testing';
import { BirdhousesController } from './birdhouses.controller';

describe('Birdhouses Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BirdhousesController],
    }).compile();

    controller = module.get(BirdhousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
