import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { SuperheroesModule } from './superheroes/superheroes.module';
import {ConfigModule} from "@nestjs/config"
import { Superheroes } from "./superheroes/superheroes.model";
import { FilesModule } from './files/files.module';
// import { ServeStaticModule } from "@nestjs/serve-static";
// import { join } from "path";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
        }),
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '..', 'client')
        // }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Superheroes],
            autoLoadModels: true,
          }),
        SuperheroesModule,
        FilesModule,
    ]
})

export class AppModule {}