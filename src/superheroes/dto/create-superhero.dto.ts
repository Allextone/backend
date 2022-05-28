import { ApiProperty } from "@nestjs/swagger";

export class CreateSuperheroDto {

    @ApiProperty({example: 'Flash', description: 'Никнейм супергероя'})
    readonly nickname: string;

    @ApiProperty({example: "Barry Alen", description: 'Реально имя супергероя'})
    readonly real_name: string;

    @ApiProperty({example: "My name is Barry Alen, and I`m the fastest men in the Earth...", description: 'Описание супергероя'})
    readonly origin_description: string;

    @ApiProperty({example: "Superfast", description: 'Сила супергероя'})
    readonly superpowers: string;

    @ApiProperty({example: "...I want eat...", description: 'Ключевая фраза супергероя'})
    readonly catch_phrase: string;

    @ApiProperty({example: "flash.jpg", description: 'Фото супергероя'})
    readonly image: string;
}