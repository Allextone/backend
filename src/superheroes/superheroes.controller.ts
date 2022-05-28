import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superheroes } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

@ApiTags('Ендпоинт создания/получения супергероя')
@Controller('superheroes')
export class SuperheroesController {

    constructor(private superheroesService: SuperheroesService) {}

    @ApiOperation({summary: "Получение всех супергероев"})
    // @ApiResponse({status: 200, type: Superheroes})
    @Get()
    getAllSuperheroes() {
        console.log(`getAllSuperheroes`)
        return this.superheroesService.getAllSuperheroes();
    }

    @ApiOperation({summary: "Создание супергероя"})
    // @ApiResponse({status: 200, type: [Superheroes]})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() superheroDto: CreateSuperheroDto,
            @UploadedFile() image ) {
        console.log(`superheroDto`, superheroDto)
        return this.superheroesService.createSuperhero(superheroDto, image);
    }

    // @ApiOperation({summary: "Редактирование супергероя"})
    // @Post()
    // edit(@Body() superheroDto: CreateSuperheroDto) {
    //     console.log(`superheroDto`, superheroDto)
    //     return this.superheroesService.editSuperhero(superheroDto);
    // }

    // @ApiOperation({summary: "Удаление супергероя"})
    // @Post()
    // delete(@Body() superheroDto: deleteSuperheroDto) {
    //     console.log(`superheroDto`, superheroDto)
    //     return this.superheroesService.deleteSuperhero(superheroDto);
    // }
}
