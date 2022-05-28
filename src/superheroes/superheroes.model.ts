import { ApiProperty } from "@nestjs/swagger";
// import { Interface } from "readline";
import {Model, Table, Column, DataType} from "sequelize-typescript";


interface SuperheroesCreationAttrs {
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string;
}

@Table({ tableName: "superheroes"})
export class Superheroes extends Model<Superheroes, SuperheroesCreationAttrs> {

    @ApiProperty({example: 1, description: 'ID супергероя'})
    @Column({ type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'Flash', description: 'Никнейм супергероя'})
    @Column({ type: DataType.STRING, unique:true, allowNull: false })
    nickname: string;

    @ApiProperty({example: "Barry Alen", description: 'Реально имя супергероя'})
    @Column({ type: DataType.STRING, allowNull: false })
    real_name: string;

    @ApiProperty({example: "My name is Barry Alen, and I`m the fastest men in the Earth...", description: 'Описание супергероя'})
    @Column({ type: DataType.STRING, allowNull: false })
    origin_description: string;

    @ApiProperty({example: "Superfast", description: 'Сила супергероя'})
    @Column({ type: DataType.STRING, allowNull: false })
    superpowers: string;

    @ApiProperty({example: "...I want eat...", description: 'Ключевая фраза супергероя'})
    @Column({ type: DataType.STRING, allowNull: false })
    catch_phrase: string;

    @ApiProperty({example: "flash.jpg", description: 'Фото супергероя'})
    @Column({ type: DataType.STRING, allowNull: true })
    image: string;

}