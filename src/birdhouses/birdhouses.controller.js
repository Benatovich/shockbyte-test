import { Controller, Get, Post, Bind, Patch, Body, Param, Delete } from '@nestjs/common';

@Controller('birdhouses')
export class BirdhousesController {
    // register a new birdhouse
  // POST .../house
  //  Request: { longitude: number, latitude: number, name: string }
  //  Response: { id: uuid, ubid: uuid, birds: number, eggs: number, longitude: number, latitude: number, name: string } (201)
    @Post()
    @Bind(Body())
  create() {
    return 'This action adds a new birdhouse';
  }

    // update/add to residency data history for a birdhouse
    // POST .../house/<id>/residency
    //  Request: { birds: number, eggs: number}
    //  Response: { birds: number, eggs: number, longitude: number, latitude: number, name: string } (201)

    // get info about a birdhouse
    // GET .../house/<id>
    // - Response: { birds: number, eggs: number, longitude: number, latitude: number, name: string } (200)
    @Get(':id')
    @Bind(Param('id'))
    findOne(id) {
      console.log('id', id);
      return `This action returns a #${id} birdhouse`;
    }

    // update info for a birdhouse
  // PATCH .../house/<id>
  //  Request: { longitude: number, latitude: number, name: string }
  //  Response: { birds: number, eggs: number, longitude: number, latitude: number, name: string } (200)
  @Patch(':id')
  @Bind(Param('id'), Body())
    update(id) {
      return `This action updates a #${id} birdhouse`;
    }

    @Delete(':id')
    @Bind(Param('id'))
  remove(id) {
    return `This action removes a #${id} birdhouse`;
  }


//     @Get()
//   findAll() {
//     return 'This action returns all birdhouses';
//   }
}
