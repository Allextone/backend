import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { DeleteSuperheroDto } from './dto/delete-superhero.dto';
import { Superheroes } from './superheroes.model';

@Injectable()
export class SuperheroesService {

    constructor(@InjectModel(Superheroes) private superheroesRepository: typeof Superheroes,
                private filesService: FilesService) {}

    async getAllSuperheroes() {
        const superheroes = await this.superheroesRepository.findAll();
        // const superheroes = await this.superheroesRepository.findOne({where: {id: 1}});
        return superheroes;
    }

    async createSuperhero(dto: CreateSuperheroDto, image: any) {
        console.log(`dto`, dto)
        const fileName = await this.filesService.createFile(image);
        const superhero = await this.superheroesRepository.create({ ...dto, image: fileName });
        return 'The superhero was created!';
    }

    // async editSuperhero(dto: CreateSuperheroDto) {
    //     console.log(dto)
    //     // const superhero = await this.superheroesRepository.update(dto);
    //     return 'The superhero was updated!'
    // }

    // async deleteSuperhero(dto: DeleteSuperheroDto) {
    //     console.log(dto);
    //     const superhero = await this.superheroesRepository.delete(dto);
    //     return 'The superhero was deleted!'
    // }
}
