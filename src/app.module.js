import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdhousesService } from './birdhouses/birdhouses.service';
import { BirdhousesController } from './birdhouses/birdhouses.controller';
import { BirdhousesModule } from './birdhouses/birdhouses.module';

@Module({
  imports: [BirdhousesModule],
  controllers: [AppController, BirdhousesController],
  providers: [AppService, BirdhousesService],
})
export class AppModule {}
