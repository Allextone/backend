import { Module } from '@nestjs/common';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { SequelizeModule } from "@nestjs/sequelize"
import { Superheroes } from './superheroes.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
  imports: [
    SequelizeModule.forFeature([Superheroes]),
    FilesModule,
  ]
})
export class SuperheroesModule {}
