import { Injectable } from '@nestjs/common';

@Injectable()
export class BirdhousesService {
  constructor() {
    this.birdhouses = [];
  }

  create(birdhouse) {
    this.birdhouses.push(birdhouse);
  }

  findAll() {
    return this.birdhouses;
  }
}
